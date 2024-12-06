import React, { useState } from 'react';
import './TableStyles.css';

const PassiveArts = () => {
    const [activeTier, setActiveTier] = useState(null);

    const toggleArtDetails = (tier) => {
        setActiveTier(activeTier === tier ? null : tier);
    };

    return (
        <div className="table-container">
            <h2>Passive Arts</h2>
            <table className="arts-table">
                <thead>
                    <tr>
                        <th>Art Name</th>
                        <th>Art Specialty</th>
                        <th>Requirements</th>
                        <th>Art Tiers</th>
                    </tr>
                </thead>
                <tbody className="row-1">
                    <tr>
                        <td>Acid Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceF')}
                                className={`tier-text black ${activeTier === 'AcidResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceE')}
                                className={`tier-text white ${activeTier === 'AcidResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceD')}
                                className={`tier-text green ${activeTier === 'AcidResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceC')}
                                className={`tier-text blue ${activeTier === 'AcidResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceB')}
                                className={`tier-text purple ${activeTier === 'AcidResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceA')}
                                className={`tier-text orange ${activeTier === 'AcidResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AcidResistanceS')}
                                className={`tier-text red ${activeTier === 'AcidResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'AcidResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AcidResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Arcane Sight</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightF')}
                                className={`tier-text black ${activeTier === 'ArcaneSightF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightE')}
                                className={`tier-text white ${activeTier === 'ArcaneSightE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightD')}
                                className={`tier-text green ${activeTier === 'ArcaneSightD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightC')}
                                className={`tier-text blue ${activeTier === 'ArcaneSightC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightB')}
                                className={`tier-text purple ${activeTier === 'ArcaneSightB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightA')}
                                className={`tier-text orange ${activeTier === 'ArcaneSightA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ArcaneSightS')}
                                className={`tier-text red ${activeTier === 'ArcaneSightS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ArcaneSightF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSightE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSight' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSightC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSightB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSightA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ArcaneSightS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Bludgeoning Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceF')}
                                className={`tier-text black ${activeTier === 'BludgeoningResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceE')}
                                className={`tier-text white ${activeTier === 'BludgeoningResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceD')}
                                className={`tier-text green ${activeTier === 'BludgeoningResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceC')}
                                className={`tier-text blue ${activeTier === 'BludgeoningResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceB')}
                                className={`tier-text purple ${activeTier === 'BludgeoningResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceA')}
                                className={`tier-text orange ${activeTier === 'BludgeoningResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BludgeoningResistanceS')}
                                className={`tier-text red ${activeTier === 'BludgeoningResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'BludgeoningResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BludgeoningResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Cold Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceF')}
                                className={`tier-text black ${activeTier === 'ColdResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceE')}
                                className={`tier-text white ${activeTier === 'ColdResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceD')}
                                className={`tier-text green ${activeTier === 'ColdResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceC')}
                                className={`tier-text blue ${activeTier === 'ColdResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceB')}
                                className={`tier-text purple ${activeTier === 'ColdResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceA')}
                                className={`tier-text orange ${activeTier === 'ColdResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ColdResistanceS')}
                                className={`tier-text red ${activeTier === 'ColdResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ColdResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ColdResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Dark Wisdom</td>
                        <td>Charisma A</td>
                        <td>Ability to cause debuffs witdout items</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomF')}
                                className={`tier-text black ${activeTier === 'DarkWisdomF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomE')}
                                className={`tier-text white ${activeTier === 'DarkWisdomE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomD')}
                                className={`tier-text green ${activeTier === 'DarkWisdomD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomC')}
                                className={`tier-text blue ${activeTier === 'DarkWisdomC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomB')}
                                className={`tier-text purple ${activeTier === 'DarkWisdomB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomA')}
                                className={`tier-text orange ${activeTier === 'DarkWisdomA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('DarkWisdomS')}
                                className={`tier-text red ${activeTier === 'DarkWisdomS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'DarkWisdomF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'DarkWisdomS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Enhanced Sight</td>
                        <td>Heavy Passive Users/S Strengtd</td>
                        <td>Wisdom 13+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightF')}
                                className={`tier-text black ${activeTier === 'EnhancedSightF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightE')}
                                className={`tier-text white ${activeTier === 'EnhancedSightE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightD')}
                                className={`tier-text green ${activeTier === 'EnhancedSightD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightC')}
                                className={`tier-text blue ${activeTier === 'EnhancedSightC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightB')}
                                className={`tier-text purple ${activeTier === 'EnhancedSightB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightA')}
                                className={`tier-text orange ${activeTier === 'EnhancedSightA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('EnhancedSightS')}
                                className={`tier-text red ${activeTier === 'EnhancedSightS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'EnhancedSightF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'EnhancedSightS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Fire Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('FireResistanceF')}
                                className={`tier-text black ${activeTier === 'FireResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceE')}
                                className={`tier-text white ${activeTier === 'FireResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceD')}
                                className={`tier-text green ${activeTier === 'FireResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceC')}
                                className={`tier-text blue ${activeTier === 'FireResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceB')}
                                className={`tier-text purple ${activeTier === 'FireResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceA')}
                                className={`tier-text orange ${activeTier === 'FireResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FireResistanceS')}
                                className={`tier-text red ${activeTier === 'FireResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'FireResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FireResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Fortitude</td>
                        <td>Charisma A</td>
                        <td>Wielding a shield</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('FortitudeF')}
                                className={`tier-text black ${activeTier === 'FortitudeF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeE')}
                                className={`tier-text white ${activeTier === 'FortitudeE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeD')}
                                className={`tier-text green ${activeTier === 'FortitudeD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeC')}
                                className={`tier-text blue ${activeTier === 'FortitudeC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeB')}
                                className={`tier-text purple ${activeTier === 'FortitudeB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeA')}
                                className={`tier-text orange ${activeTier === 'FortitudeA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('FortitudeS')}
                                className={`tier-text red ${activeTier === 'FortitudeS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'FortitudeF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'FortitudeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Lightning Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceF')}
                                className={`tier-text black ${activeTier === 'LightningResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceE')}
                                className={`tier-text white ${activeTier === 'LightningResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceD')}
                                className={`tier-text green ${activeTier === 'LightningResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceC')}
                                className={`tier-text blue ${activeTier === 'LightningResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceB')}
                                className={`tier-text purple ${activeTier === 'LightningResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceA')}
                                className={`tier-text orange ${activeTier === 'LightningResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('LightningResistanceS')}
                                className={`tier-text red ${activeTier === 'LightningResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'LightningResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'LightningResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Magic Resistance</td>
                        <td>Versatile Passive User/S Strengtd</td>
                        <td>Strengtd 15+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceF')}
                                className={`tier-text black ${activeTier === 'MagicResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceE')}
                                className={`tier-text white ${activeTier === 'MagicResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceD')}
                                className={`tier-text green ${activeTier === 'MagicResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceC')}
                                className={`tier-text blue ${activeTier === 'MagicResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceB')}
                                className={`tier-text purple ${activeTier === 'MagicResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceA')}
                                className={`tier-text orange ${activeTier === 'MagicResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MagicResistanceS')}
                                className={`tier-text red ${activeTier === 'MagicResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'MagicResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MagicResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Mental Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceF')}
                                className={`tier-text black ${activeTier === 'MentalResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceE')}
                                className={`tier-text white ${activeTier === 'MentalResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceD')}
                                className={`tier-text green ${activeTier === 'MentalResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceC')}
                                className={`tier-text blue ${activeTier === 'MentalResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceB')}
                                className={`tier-text purple ${activeTier === 'MentalResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceA')}
                                className={`tier-text orange ${activeTier === 'MentalResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('MentalResistanceS')}
                                className={`tier-text red ${activeTier === 'MentalResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'MentalResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'MentalResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Necrotic Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceF')}
                                className={`tier-text black ${activeTier === 'NecroticResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceE')}
                                className={`tier-text white ${activeTier === 'NecroticResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceD')}
                                className={`tier-text green ${activeTier === 'NecroticResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceC')}
                                className={`tier-text blue ${activeTier === 'NecroticResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceB')}
                                className={`tier-text purple ${activeTier === 'NecroticResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceA')}
                                className={`tier-text orange ${activeTier === 'NecroticResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('NecroticResistanceS')}
                                className={`tier-text red ${activeTier === 'NecroticResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'NecroticResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'NecroticResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Piercing Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceF')}
                                className={`tier-text black ${activeTier === 'PiercingResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceE')}
                                className={`tier-text white ${activeTier === 'PiercingResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceD')}
                                className={`tier-text green ${activeTier === 'PiercingResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceC')}
                                className={`tier-text blue ${activeTier === 'PiercingResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceB')}
                                className={`tier-text purple ${activeTier === 'PiercingResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceA')}
                                className={`tier-text orange ${activeTier === 'PiercingResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PiercingResistanceS')}
                                className={`tier-text red ${activeTier === 'PiercingResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'PiercingResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PiercingResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Poison Resistance</td>
                        <td>Charisma S/Strengtd S</td>
                        <td>Unarmed Damage Die</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceF')}
                                className={`tier-text black ${activeTier === 'PoisonResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceE')}
                                className={`tier-text white ${activeTier === 'PoisonResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceD')}
                                className={`tier-text green ${activeTier === 'PoisonResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceC')}
                                className={`tier-text blue ${activeTier === 'PoisonResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceB')}
                                className={`tier-text purple ${activeTier === 'PoisonResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceA')}
                                className={`tier-text orange ${activeTier === 'PoisonResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('PoisonResistanceS')}
                                className={`tier-text red ${activeTier === 'PoisonResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'PoisonResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'PoisonResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Slashing Resistance</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 16+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceF')}
                                className={`tier-text black ${activeTier === 'SlashingResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceE')}
                                className={`tier-text white ${activeTier === 'SlashingResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceD')}
                                className={`tier-text green ${activeTier === 'SlashingResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceC')}
                                className={`tier-text blue ${activeTier === 'SlashingResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceB')}
                                className={`tier-text purple ${activeTier === 'SlashingResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceA')}
                                className={`tier-text orange ${activeTier === 'SlashingResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SlashingResistanceS')}
                                className={`tier-text red ${activeTier === 'SlashingResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'SlashingResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistance' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SlashingResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde weapon's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>tdunder Resistance</td>
                        <td>Heavy Passive Users/S Strengtd</td>
                        <td>Strengtd 13+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceF')}
                                className={`tier-text black ${activeTier === 'tdunderResistanceF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceE')}
                                className={`tier-text white ${activeTier === 'tdunderResistanceE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceD')}
                                className={`tier-text green ${activeTier === 'tdunderResistanceD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceC')}
                                className={`tier-text blue ${activeTier === 'tdunderResistanceC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceB')}
                                className={`tier-text purple ${activeTier === 'tdunderResistanceB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceA')}
                                className={`tier-text orange ${activeTier === 'tdunderResistanceA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('tdunderResistanceS')}
                                className={`tier-text red ${activeTier === 'tdunderResistanceS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'tdunderResistanceF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'tdunderResistanceS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Venom Strike</td>
                        <td>S Charisma/S Strengtd</td>
                        <td>Dexterity 15+/Intelligence 13+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeF')}
                                className={`tier-text black ${activeTier === 'VenomStrikeF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeE')}
                                className={`tier-text white ${activeTier === 'VenomStrikeE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeD')}
                                className={`tier-text green ${activeTier === 'VenomStrikeD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeC')}
                                className={`tier-text blue ${activeTier === 'VenomStrikeC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeB')}
                                className={`tier-text purple ${activeTier === 'VenomStrikeB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeA')}
                                className={`tier-text orange ${activeTier === 'VenomStrikeA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('VenomStrikeS')}
                                className={`tier-text red ${activeTier === 'VenomStrikeS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'VenomStrikeF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrike' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody className="row-1">
                    <tr>
                        <td>Viper Strike</td>
                        <td>Charisma S/Strengtd S</td>
                        <td>Dexterity 17+/Intelligence 13+</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeF')}
                                className={`tier-text black ${activeTier === 'ViperStrikeF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeE')}
                                className={`tier-text white ${activeTier === 'ViperStrikeE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeD')}
                                className={`tier-text green ${activeTier === 'ViperStrikeD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeC')}
                                className={`tier-text blue ${activeTier === 'ViperStrikeC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeB')}
                                className={`tier-text purple ${activeTier === 'ViperStrikeB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeA')}
                                className={`tier-text orange ${activeTier === 'ViperStrikeA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ViperStrikeS')}
                                className={`tier-text red ${activeTier === 'ViperStrikeS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ViperStrikeF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take twice tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving tdrow equal to your Art DC or take tde Passive's damage dice plus your Strengtd modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default PassiveArts;
