// src/MagicArts.jsx
import React, { useState } from 'react';
import './TableStyles.css';

const MagicArts = () => {
    const [activeTier, setActiveTier] = useState(null);

    const toggleArtDetails = (tier) => {
        setActiveTier(activeTier === tier ? null : tier);
    };

    return (
        <div className="table-container">
            <h2>Magic Arts</h2>
            <table className="arts-table">
                <thead>
                    <tr>
                        <th>Art Name</th>
                        <th>Art Specialty</th>
                        <th>Requirements</th>
                        <th>Art Tiers</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Assassinate</td>
                        <td>S Charisma/S Strength</td>
                        <th>Dexterity 16+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('AssassinateF')}
                                className={`tier-text black ${activeTier === 'AssassinateF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateE')}
                                className={`tier-text white ${activeTier === 'AssassinateE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateD')}
                                className={`tier-text green ${activeTier === 'AssassinateD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateC')}
                                className={`tier-text blue ${activeTier === 'AssassinateC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateB')}
                                className={`tier-text purple ${activeTier === 'AssassinateB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateA')}
                                className={`tier-text orange ${activeTier === 'AssassinateA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('AssassinateS')}
                                className={`tier-text red ${activeTier === 'AssassinateS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'AssassinateF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AssassinateE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'Assassinate' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AssassinateC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AssassinateB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AssassinateA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'AssassinateS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Break Trigger</td>
                        <td>Charisma A</td>
                        <td>Ability to cause debuffs without items</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerF')}
                                className={`tier-text black ${activeTier === 'BreakTriggerF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerE')}
                                className={`tier-text white ${activeTier === 'BreakTriggerE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerD')}
                                className={`tier-text green ${activeTier === 'BreakTriggerD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerC')}
                                className={`tier-text blue ${activeTier === 'BreakTriggerC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerB')}
                                className={`tier-text purple ${activeTier === 'BreakTriggerB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerA')}
                                className={`tier-text orange ${activeTier === 'BreakTriggerA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('BreakTriggerS')}
                                className={`tier-text red ${activeTier === 'BreakTriggerS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'BreakTriggerF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'BreakTriggerS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Cleave</td>
                        <td>Heavy Magic Users/S Strength</td>
                        <th>Strength 13+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('CleaveF')}
                                className={`tier-text black ${activeTier === 'CleaveF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveE')}
                                className={`tier-text white ${activeTier === 'CleaveE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveD')}
                                className={`tier-text green ${activeTier === 'CleaveD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveC')}
                                className={`tier-text blue ${activeTier === 'CleaveC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveB')}
                                className={`tier-text purple ${activeTier === 'CleaveB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveA')}
                                className={`tier-text orange ${activeTier === 'CleaveA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CleaveS')}
                                className={`tier-text red ${activeTier === 'CleaveS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'CleaveF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CleaveS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Counter Strike</td>
                        <td>Versatile Passive User/S Strength</td>
                        <th>Strength 15+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeF')}
                                className={`tier-text black ${activeTier === 'CounterStrikeF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeE')}
                                className={`tier-text white ${activeTier === 'CounterStrikeE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeD')}
                                className={`tier-text green ${activeTier === 'CounterStrikeD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeC')}
                                className={`tier-text blue ${activeTier === 'CounterStrikeC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeB')}
                                className={`tier-text purple ${activeTier === 'CounterStrikeB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeA')}
                                className={`tier-text orange ${activeTier === 'CounterStrikeA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('CounterStrikeS')}
                                className={`tier-text red ${activeTier === 'CounterStrikeS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'CounterStrikeF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'CounterStrikeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Parry</td>
                        <td>Versatile Passive User/S Strength</td>
                        <th>Strength 15+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ParryF')}
                                className={`tier-text black ${activeTier === 'ParryF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryE')}
                                className={`tier-text white ${activeTier === 'ParryE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryD')}
                                className={`tier-text green ${activeTier === 'ParryD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryC')}
                                className={`tier-text blue ${activeTier === 'ParryC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryB')}
                                className={`tier-text purple ${activeTier === 'ParryB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryA')}
                                className={`tier-text orange ${activeTier === 'ParryA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ParryS')}
                                className={`tier-text red ${activeTier === 'ParryS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ParryF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ParryS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Passive's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Shield Swing</td>
                        <td>Charisma A</td>
                        <td>Wielding a shield</td>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingF')}
                                className={`tier-text black ${activeTier === 'ShieldSwingF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingE')}
                                className={`tier-text white ${activeTier === 'ShieldSwingE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingD')}
                                className={`tier-text green ${activeTier === 'ShieldSwingD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingC')}
                                className={`tier-text blue ${activeTier === 'ShieldSwingC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingB')}
                                className={`tier-text purple ${activeTier === 'ShieldSwingB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingA')}
                                className={`tier-text orange ${activeTier === 'ShieldSwingA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('ShieldSwingS')}
                                className={`tier-text red ${activeTier === 'ShieldSwingS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'ShieldSwingF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ShieldSwingS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Smash</td>
                        <td>Heavy Magic Users/S Strength</td>
                        <th>Strength 13+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('SmashF')}
                                className={`tier-text black ${activeTier === 'SmashF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashE')}
                                className={`tier-text white ${activeTier === 'SmashE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashD')}
                                className={`tier-text green ${activeTier === 'SmashD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashC')}
                                className={`tier-text blue ${activeTier === 'SmashC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashB')}
                                className={`tier-text purple ${activeTier === 'SmashB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashA')}
                                className={`tier-text orange ${activeTier === 'SmashA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SmashS')}
                                className={`tier-text red ${activeTier === 'SmashS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'SmashF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SmashS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Sword Clash</td>
                        <td>Versatile Magic User/S Strength</td>
                        <th>Strength 15+</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('SwordclashF')}
                                className={`tier-text black ${activeTier === 'SwordclashF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashE')}
                                className={`tier-text white ${activeTier === 'SwordclashE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashD')}
                                className={`tier-text green ${activeTier === 'SwordclashD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashC')}
                                className={`tier-text blue ${activeTier === 'SwordclashC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashB')}
                                className={`tier-text purple ${activeTier === 'SwordclashB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashA')}
                                className={`tier-text orange ${activeTier === 'SwordclashA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('SwordclashS')}
                                className={`tier-text red ${activeTier === 'SwordclashS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'SwordclashF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'SwordclashS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Tiger Echo Fist</td>
                        <td>Charisma S/Strength S</td>
                        <th>Unarmed Damage Die</th>
                        <td className="art-tier-buttons">
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistF')}
                                className={`tier-text black ${activeTier === 'TigerEchoFistF' ? 'active-tier' : ''}`}
                            >
                                F Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistE')}
                                className={`tier-text white ${activeTier === 'TigerEchoFistE' ? 'active-tier' : ''}`}
                            >
                                E Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistD')}
                                className={`tier-text green ${activeTier === 'TigerEchoFistD' ? 'active-tier' : ''}`}
                            >
                                D Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistC')}
                                className={`tier-text blue ${activeTier === 'TigerEchoFistC' ? 'active-tier' : ''}`}
                            >
                                C Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistB')}
                                className={`tier-text purple ${activeTier === 'TigerEchoFistB' ? 'active-tier' : ''}`}
                            >
                                B Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistA')}
                                className={`tier-text orange ${activeTier === 'TigerEchoFistA' ? 'active-tier' : ''}`}
                            >
                                A Tier
                            </span>
                            <span
                                onClick={() => toggleArtDetails('TigerEchoFistS')}
                                className={`tier-text red ${activeTier === 'TigerEchoFistS' ? 'active-tier' : ''}`}
                            >
                                S Tier
                            </span>
                        </td>
                    </tr>
                    {activeTier === 'TigerEchoFistF' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'TigerEchoFistS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Venom Strike</td>
                        <td>S Charisma/S Strength</td>
                        <th>Dexterity 15+/Intelligence 13+</th>
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
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrike' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'VenomStrikeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
                <tbody>
                    <tr>
                        <td>Viper Strike</td>
                        <td>Charisma S/Strength S</td>
                        <th>Dexterity 17+/Intelligence 13+</th>
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
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeE' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeD' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeC' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 8:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 9:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 10:</strong> As an action, all creatures in a 15-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeB' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 6:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                <p><strong>Level 7:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take twice the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 12 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeA' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 4:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>
                                <p><strong>Level 5:</strong> As an action, all creatures in a 10-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 18 seconds.</p>

                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                    {activeTier === 'ViperStrikeS' && (
                        <tr>
                            <td colSpan="2" className="art-levels">
                                <p><strong>Level 1:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 30 seconds.</p>
                                <p><strong>Level 2:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice, or half as much on a success. Cooldown: 24 seconds.</p>
                                <p><strong>Level 3:</strong> As an action, all creatures in a 5-foot cone must succeed a Dexterity saving throw equal to your Art DC or take the Magic's damage dice plus your Strength modifier, or half as much on a success. Cooldown: 24 seconds.</p>
                                {/* Add levels 8-10 as needed */}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default MagicArts;
