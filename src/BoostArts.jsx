import React, { useState } from 'react';
import './TableStyles.css';

const BoostArts = () => {
    const [activeTier, setActiveTier] = useState(null);

    const toggleArtDetails = (tier) => {
        setActiveTier(activeTier === tier ? null : tier);
    };

    return (
        <div className="table-container">
            <h2>Boost Arts</h2>
            <table className="arts-table">
                <thead>
                    <tr>
                        <th>Art Name</th>
                        <th>Art Specialty</th>
                        <th>Art Tiers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Agony</td>
                        <td>S Charisma</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('AgonyF')}
                                className={`tier-text black ${activeTier === 'AgonyF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyE')}
                                className={`tier-text white ${activeTier === 'AgonyE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyD')}
                                className={`tier-text green ${activeTier === 'AgonyD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyC')}
                                className={`tier-text blue ${activeTier === 'AgonyC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyB')}
                                className={`tier-text purple ${activeTier === 'AgonyB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyA')}
                                className={`tier-text orange ${activeTier === 'AgonyA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AgonyS')}
                                className={`tier-text red ${activeTier === 'AgonyS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'AgonyF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AgonyS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Anchor Howl</td>
                        <td>S Constitution/A Charisma</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlF')}
                                className={`tier-text black ${activeTier === 'AnchorHowlF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlE')}
                                className={`tier-text white ${activeTier === 'AnchorHowlE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlD')}
                                className={`tier-text green ${activeTier === 'AnchorHowlD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlC')}
                                className={`tier-text blue ${activeTier === 'AnchorHowlC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlB')}
                                className={`tier-text purple ${activeTier === 'AnchorHowlB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlA')}
                                className={`tier-text orange ${activeTier === 'AnchorHowlA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AnchorHowlS')}
                                className={`tier-text red ${activeTier === 'AnchorHowlS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'AnchorHowlF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AnchorHowlS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Castle Of Stone</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneF')}
                                className={`tier-text black ${activeTier === 'CastleOfStoneF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneE')}
                                className={`tier-text white ${activeTier === 'CastleOfStoneE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneD')}
                                className={`tier-text green ${activeTier === 'CastleOfStoneD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneC')}
                                className={`tier-text blue ${activeTier === 'CastleOfStoneC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneB')}
                                className={`tier-text purple ${activeTier === 'CastleOfStoneB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneA')}
                                className={`tier-text orange ${activeTier === 'CastleOfStoneA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastleOfStoneS')}
                                className={`tier-text red ${activeTier === 'CastleOfStoneS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'CastleOfStoneF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastleOfStoneS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Castling</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('CastlingF')}
                                className={`tier-text black ${activeTier === 'CastlingF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingE')}
                                className={`tier-text white ${activeTier === 'CastlingE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingD')}
                                className={`tier-text green ${activeTier === 'CastlingD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingC')}
                                className={`tier-text blue ${activeTier === 'CastlingC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingB')}
                                className={`tier-text purple ${activeTier === 'CastlingB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingA')}
                                className={`tier-text orange ${activeTier === 'CastlingA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CastlingS')}
                                className={`tier-text red ${activeTier === 'CastlingS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'CastlingF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CastlingS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Clairvoyance</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceF')}
                                className={`tier-text black ${activeTier === 'ClairvoyanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceE')}
                                className={`tier-text white ${activeTier === 'ClairvoyanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceD')}
                                className={`tier-text green ${activeTier === 'ClairvoyanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceC')}
                                className={`tier-text blue ${activeTier === 'ClairvoyanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceB')}
                                className={`tier-text purple ${activeTier === 'ClairvoyanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceA')}
                                className={`tier-text orange ${activeTier === 'ClairvoyanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ClairvoyanceS')}
                                className={`tier-text red ${activeTier === 'ClairvoyanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ClairvoyanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ClairvoyanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Coward's Retreat</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatF')}
                                className={`tier-text black ${activeTier === 'CowardsRetreatF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatE')}
                                className={`tier-text white ${activeTier === 'CowardsRetreatE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatD')}
                                className={`tier-text green ${activeTier === 'CowardsRetreatD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatC')}
                                className={`tier-text blue ${activeTier === 'CowardsRetreatC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatB')}
                                className={`tier-text purple ${activeTier === 'CowardsRetreatB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatA')}
                                className={`tier-text orange ${activeTier === 'CowardsRetreatA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CowardsRetreatS')}
                                className={`tier-text red ${activeTier === 'CowardsRetreatS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'CowardsRetreatF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CowardsRetreatS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Demoralize</td>
                        <td>S Charisma/S Constitution</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('DemoralizeF')}
                                className={`tier-text black ${activeTier === 'DemoralizeF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeE')}
                                className={`tier-text white ${activeTier === 'DemoralizeE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeD')}
                                className={`tier-text green ${activeTier === 'DemoralizeD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeC')}
                                className={`tier-text blue ${activeTier === 'DemoralizeC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeB')}
                                className={`tier-text purple ${activeTier === 'DemoralizeB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeA')}
                                className={`tier-text orange ${activeTier === 'DemoralizeA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DemoralizeS')}
                                className={`tier-text red ${activeTier === 'DemoralizeS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'DemoralizeF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DemoralizeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Diminish</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('DiminishF')}
                                className={`tier-text black ${activeTier === 'DiminishF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishE')}
                                className={`tier-text white ${activeTier === 'DiminishE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishD')}
                                className={`tier-text green ${activeTier === 'DiminishD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishC')}
                                className={`tier-text blue ${activeTier === 'DiminishC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishB')}
                                className={`tier-text purple ${activeTier === 'DiminishB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishA')}
                                className={`tier-text orange ${activeTier === 'DiminishA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DiminishS')}
                                className={`tier-text red ${activeTier === 'DiminishS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'DiminishF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DiminishS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Focus</td>
                        <td>S Wisdom/S Dexterity</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('FocusF')}
                                className={`tier-text black ${activeTier === 'FocusF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusE')}
                                className={`tier-text white ${activeTier === 'FocusE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusD')}
                                className={`tier-text green ${activeTier === 'FocusD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusC')}
                                className={`tier-text blue ${activeTier === 'FocusC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusB')}
                                className={`tier-text purple ${activeTier === 'FocusB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusA')}
                                className={`tier-text orange ${activeTier === 'FocusA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FocusS')}
                                className={`tier-text red ${activeTier === 'FocusS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'FocusF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FocusS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Lanius Capture</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureF')}
                                className={`tier-text black ${activeTier === 'LaniusCaptureF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureE')}
                                className={`tier-text white ${activeTier === 'LaniusCaptureE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureD')}
                                className={`tier-text green ${activeTier === 'LaniusCaptureD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureC')}
                                className={`tier-text blue ${activeTier === 'LaniusCaptureC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureB')}
                                className={`tier-text purple ${activeTier === 'LaniusCaptureB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureA')}
                                className={`tier-text orange ${activeTier === 'LaniusCaptureA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LaniusCaptureS')}
                                className={`tier-text red ${activeTier === 'LaniusCaptureS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'LaniusCaptureF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LaniusCaptureS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Mana Channelling</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingF')}
                                className={`tier-text black ${activeTier === 'ManaChannellingF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingE')}
                                className={`tier-text white ${activeTier === 'ManaChannellingE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingD')}
                                className={`tier-text green ${activeTier === 'ManaChannellingD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingC')}
                                className={`tier-text blue ${activeTier === 'ManaChannellingC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingB')}
                                className={`tier-text purple ${activeTier === 'ManaChannellingB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingA')}
                                className={`tier-text orange ${activeTier === 'ManaChannellingA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ManaChannellingS')}
                                className={`tier-text red ${activeTier === 'ManaChannellingS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ManaChannellingF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ManaChannellingS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Negative Pressure</td>
                        <td>S Charisma/S Strength</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('NegativePressureF')}
                                className={`tier-text black ${activeTier === 'NegativePressureF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureE')}
                                className={`tier-text white ${activeTier === 'NegativePressureE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureD')}
                                className={`tier-text green ${activeTier === 'NegativePressureD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureC')}
                                className={`tier-text blue ${activeTier === 'NegativePressureC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureB')}
                                className={`tier-text purple ${activeTier === 'NegativePressureB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureA')}
                                className={`tier-text orange ${activeTier === 'NegativePressureA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NegativePressureS')}
                                className={`tier-text red ${activeTier === 'NegativePressureS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'NegativePressureF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressureE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressure' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressureC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressureB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressureA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NegativePressureS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Ogre Spirit</td>
                        <td>Charisma S/Strength S</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritF')}
                                className={`tier-text black ${activeTier === 'OgreSpiritF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritE')}
                                className={`tier-text white ${activeTier === 'OgreSpiritE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritD')}
                                className={`tier-text green ${activeTier === 'OgreSpiritD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritC')}
                                className={`tier-text blue ${activeTier === 'OgreSpiritC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritB')}
                                className={`tier-text purple ${activeTier === 'OgreSpiritB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritA')}
                                className={`tier-text orange ${activeTier === 'OgreSpiritA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('OgreSpiritS')}
                                className={`tier-text red ${activeTier === 'OgreSpiritS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'OgreSpiritF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'OgreSpiritS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Purifying Wind</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindF')}
                                className={`tier-text black ${activeTier === 'PurifyingWindF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindE')}
                                className={`tier-text white ${activeTier === 'PurifyingWindE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindD')}
                                className={`tier-text green ${activeTier === 'PurifyingWindD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindC')}
                                className={`tier-text blue ${activeTier === 'PurifyingWindC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindB')}
                                className={`tier-text purple ${activeTier === 'PurifyingWindB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindA')}
                                className={`tier-text orange ${activeTier === 'PurifyingWindA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PurifyingWindS')}
                                className={`tier-text red ${activeTier === 'PurifyingWindS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'PurifyingWindF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PurifyingWindS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Stalwart</td>
                        <td>Charisma A</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('StalwartF')}
                                className={`tier-text black ${activeTier === 'StalwartF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartE')}
                                className={`tier-text white ${activeTier === 'StalwartE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartD')}
                                className={`tier-text green ${activeTier === 'StalwartD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartC')}
                                className={`tier-text blue ${activeTier === 'StalwartC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartB')}
                                className={`tier-text purple ${activeTier === 'StalwartB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartA')}
                                className={`tier-text orange ${activeTier === 'StalwartA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('StalwartS')}
                                className={`tier-text red ${activeTier === 'StalwartS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'StalwartF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'StalwartS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the weapon's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default BoostArts;
