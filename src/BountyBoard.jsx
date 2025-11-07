import React, { useState, useEffect } from "react";
import "./BountyBoard.css";

const board = "/assets/bountyboard.png"; // new detailed board
const bountyPaths = [
  "/assets/bounty1.png",
  "/assets/bounty2.png",
  "/assets/bounty3.png",
  "/assets/bounty4.png",
  "/assets/bounty5.png",
  "/assets/bounty6.png",
];

// sample text—swap for your real data 0..5
const bountyData = [
 {
  "title": "Bounty: Sea Siren",
  "reward": "450 gp, dead (present larynx as proof)",
  "blurb": "Coastal songstress on a rocky islet ~1 mile off the docks; hypnotic melody; a few weak water-creatures at her call.",
  "details": "Sailors report a haunting voice rising from a jagged rock formation along the Coastal Way, roughly a mile from the harbor mouth. The Sea Siren’s melody lulls listeners into dazed obedience, drawing them overboard or onto the rocks. She is guarded by minor brine-born allies—slick salamanders and gull-sized tidewhelps—that harry boats and swimmers. Traffic has given the area a wide berth for the past week; standard ‘plug-your-ears’ methods at sea are too risky when orders must be heard. Eliminate the threat and return the siren’s larynx for payment. Harbor Wardens prefer this handled swiftly before the next storm tide amplifies her reach."
},
  {
  "title": "Bounty: Sea Siren",
  "reward": "450 gp, dead (present larynx as proof)",
  "blurb": "Coastal songstress on a rocky islet ~1 mile off the docks; hypnotic melody; a few weak water-creatures at her call.",
  "details": "Sailors report a haunting voice rising from a jagged rock formation along the Coastal Way, roughly a mile from the harbor mouth. The Sea Siren’s melody lulls listeners into dazed obedience, drawing them overboard or onto the rocks. She is guarded by minor brine-born allies—slick salamanders and gull-sized tidewhelps—that harry boats and swimmers. Traffic has given the area a wide berth for the past week; standard ‘plug-your-ears’ methods at sea are too risky when orders must be heard. Eliminate the threat and return the siren’s larynx for payment. Harbor Wardens prefer this handled swiftly before the next storm tide amplifies her reach."
},
  {
  "title": "Bounty: Coral Drake",
  "reward": "500 gp, dead",
  "blurb": "Large pelagic predator along the Coastal Way; venomous tail-barb; brutal bite-and-gnaw behavior; decimating fish stocks.",
  "details": "A hulking drake armored in reef-crusted plates has been prowling beneath the Coastal Way, surfacing at dusk to strike nets and snap at anything that splashes. Its barbed tail carries a slow-acting toxin that weakens limbs before the bite finishes the work. While attacks on sailors are rare, the creature has heavily thinned local shoals, slashing weekly hauls and stirring panic among trawlers. Reports place it cruising the drop-off where the green shallows fall to deep blue—watch for telltale coral-scored wake and floating scales. Harpoon teams should avoid trailing wounded prey; the drake circles back to worry and gnaw. Terminate the beast to restore the grounds. (If possible, present the venomous barb or jaw-plate as confirmation.)"
},
 {
  "title": "Bounty: The Sahuagin Baron",
  "reward": "420 gp",
  "blurb": "Runaway sahuagin leader entrenched in city sewers; typically travels with a small retinue. Base CI ~1.5, elevated by entourage and terrain.",
  "details": "Formerly of a coastal raiding clan, the so-called 'Baron' has severed ties and slipped inland, fortifying a lair amid storm culverts and canal junctions. His presence—and that of two to five scale-brothers at any given time—has stalled sanitation crews and made routine sluice maintenance dangerous. Expect tridents, nets, and hooked lines from grates above dark water; the Baron favors hit-and-fade strikes synchronized with surge flows from the tidegates. Reports note crude barnacle shields, scavenged guard gear, and a habit of spiking passages with caltrop shells. Pursuit is challenging due to submerged escape routes and flood releases. Recommended approach: lantern oil on the water to reveal wakes, grapnels to rip netting, and chokepoint barricades to split his escort. Capture or eliminate to restore sewer access and canal upkeep; confirmation by crest-marked trident head or the Baron's shell-crowned gorget."
},
{
  "title": "Bounty: Lake Troll",
  "reward": "625 gp (heart required)",
  "blurb": "Amphibious troll lurking beneath the waters by the West Gloam lighthouse; fog-night ambusher; brutally fast swimmer.",
  "details": "This troll surfaces after dusk when the lighthouse foghorn rolls, using the mist to close distance before yanking victims off piers and skiffs. It fights with sweeping claws and drowning holds, then slips under to regroup—merciless and habitual. Expect lair tunnels in the pilings and stonework around the light’s shoals. Fire or acid halts its regeneration; without these, wounds knit as you watch. Recommended tactics: shoreline kill-box with lanterns to cut the fog, tethered harpoons and weighted nets to keep it from diving, and grapnels to snag if it flees. Aim to cripple the legs, then pin with chain or pikes. Do not pursue into open water. Extract and preserve the heart immediately for proof and to prevent resurgence; present the heart for payment."
},
{
  "title": "Bounty: Tidal Elemental",
  "reward": "575 gp",
  "blurb": "Runaway water-spirit in a separate sewer offshoot; roaring torrent form; warps canal currents. No proof required—flow will normalize upon defeat.",
  "details": "An overcharged water elemental has densified into a tidal core deep within an unconnected sewer branch. Its surges backwash through valves and sluices, bucking boats and jamming gates across the canal grid. In the tunnels it manifests as a pressurized wall of churning water studded with grit and scrap, battering intruders and extinguishing lamps. Tactics: anchor lines and pitons for every fighter; avoid lightning magic (it conducts shock through the flood) and open flame (snuffed instantly). Cold, binding sigils, and earthen barriers work best—sandbag bulwarks can force eddies, and a weighted chain-net can drag the core into a grounding circle. Lure it toward a maintenance chamber with cutoff grates for containment. When dispersed, the canals will settle back to regular flow—Harbor Wardens will confirm by gauge readings; no trophy needed."
}
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
