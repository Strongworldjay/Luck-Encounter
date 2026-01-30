import React, { useState, useEffect } from "react";
import "./BountyBoard.css";

const board = "/assets/bountyboard.png"; 
const bountyPaths = [
  "/assets/bounty1.png",
  "/assets/bounty2.png",
  "/assets/bounty3.png",
  "/assets/bounty4.png",
  "/assets/bounty5.png",
  "/assets/bounty6.png",
];

const bountyData = [
 {
  "title": "Bounty: Sea Siren (Failed)",
  "reward": "450 gp, dead (present larynx as proof)",
  "blurb": "Will send scouts to revise new CI after it achieved Victory against adventuring party.",
  "details": "Succesfully evaded an Adventuring party where 1 member perished, most likely gained enough EXP to evolve and will be monitored and upgraded Carnage Index."
},
   {
  "title": "Bounty: Coral Drake (Completed)",
  "reward": "500 GP has been paid",
  "blurb": "Successfully slain by Sword & Shield.",
  "details": "Has been slain and confirmed."
   },
 {
  "title": "Bounty: Silver-Fox Bandit",
  "reward": "220 pp",
  "blurb": "A night stalker who has killed nad robbed many higher financial individuals within the city, estimated 4 C.I.",
  "details": "Not much is known, uses special daggers and lurks in the fogs."
},
{
  "title": "Bounty: Lake Troll",
  "reward": "625 gp (heart required)",
  "blurb": "Amphibious troll lurking beneath the waters by the West Gloam lighthouse; fog-night ambusher; brutally fast swimmer.",
  "details": "This troll surfaces after dusk when the lighthouse foghorn rolls, using the mist to close distance before yanking victims off piers and skiffs. It fights with sweeping claws, heft slam and trows, and drowning holds, then slips under to regroup—merciless and habitual. Expect lair tunnels in the pilings and stonework around the light’s shoals. Fire or acid halts its regeneration; without these, wounds knit as you watch. Recommended tactics: shoreline kill-box with lanterns to cut the fog, tethered harpoons and weighted nets to keep it from diving, and grapnels to snag if it flees. Aim to cripple the legs, then pin with chain or pikes. Do not pursue into open water. Extract and preserve the heart immediately for proof and to prevent resurgence; present the heart for payment."
},
{
  "title": "Bounty: Tidal Elemental",
  "reward": "575 gp",
  "blurb": "Runaway water-spirit in a separate sewer offshoot; roaring torrent form; warps canal currents. No proof required—flow will normalize upon defeat.",
  "details": "An overcharged water elemental has densified into a tidal core deep within an unconnected sewer branch. Its surges backwash through valves and sluices, bucking boats and jamming gates across the canal grid. In the tunnels it manifests as a pressurized wall of churning water studded with grit and scrap, battering intruders with destructive blows and extinguishing lamps. Tactics: Avoid lightning magic (it conducts shock through the flood) and open flame (snuffed instantly). Cold, binding sigils, and earthen barriers work best. When dispersed, the canals will settle back to regular flow—Harbor Wardens will confirm by gauge readings; no trophy needed."
},
{
  "title": "Bounty: Kobold Krew",
  "reward": "820 gp",
  "blurb": "Group of Kobolds who have raided and taken up residence in a Tavern/Inn outskirts.",
  "details": "A group of inventor Kobolds have taken up residence wqithin a semi-popular Inn and has setup many traps and are chaotic but simpletons in wisdom."
},


];

export default function BountyBoard() {
  const [openIndex, setOpenIndex] = useState(null);
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpenIndex(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isOpen = openIndex !== null;

  return (
    <div className={`bountyboard-root ${isOpen ? "is-open" : ""}`}>
      <div className="bountyboard-board">
        <img src={board} alt="Bounty board" className="board-img" draggable={false} />

        {/* SAFE OVERLAY AREA */}
        <div className="bountyboard-safe">
          <div className="bountyboard-grid">
            {bountyPaths.map((src, i) => (
              <button
                key={i}
                className={`bounty-cell cell-${i + 1}`}
                onClick={() => setOpenIndex(i)}
                aria-label={`Open bounty ${i + 1}`}
                title="Open bounty"
              >
                <img src={src} alt={`Bounty ${i + 1}`} draggable={false} />
              </button>
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="bountyboard-modal-backdrop" onClick={() => setOpenIndex(null)} role="dialog" aria-modal="true">
          <div className="bountyboard-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-left">
              <img src={bountyPaths[openIndex]} alt={bountyData[openIndex]?.title || "Bounty"} className="modal-image" draggable={false} />
            </div>
            <div className="modal-right">
              <div className="modal-header">
                <h2>{bountyData[openIndex]?.title || "Bounty"}</h2>
                <button className="modal-close" onClick={() => setOpenIndex(null)} aria-label="Close">×</button>
              </div>
              <div className="modal-meta"><span className="pill">{bountyData[openIndex]?.reward}</span></div>
              <p className="modal-blurb">{bountyData[openIndex]?.blurb}</p>
              <div className="modal-details">{bountyData[openIndex]?.details}</div>
              <div className="modal-actions">
                <button className="btn btn-primary" onClick={() => setOpenIndex(null)}>Acknowledge</button>
                <button className="btn btn-ghost" onClick={() => setOpenIndex(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
