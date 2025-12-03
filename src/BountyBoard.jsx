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
},
{
  "title": "Bounty: Sea Hag of the Far Reefs",
  "reward": "550 gp (present both eyes as proof)",
  "blurb": "Cunning shoreline predator haunting a small reef out west; dabbles in magic; ambushes lone fishers at low tide.",
  "details": "An old crone of the deeps prowls a jag of reef and rock on the far west coast, sometimes crawling ashore at dusk to knife nets, foul bait, and drag fishers into tide pools. She is vicious up close—black nails, eel-teeth, and a taste for panic—but her sorcery is crude: hex-laughter, brine illusions, and curses that sour courage. She is not scholarly, yet crafty: uses deadfall shells, urchin beds, and kelp nooses to control footing. Approach at mid-tide with lanterns high and boots greased against slick stone. Salted iron, mirrors, and clear commands break her tricks; keep distance to avoid her grapple and bite. Eliminate the hag and return both eyes—pickled in brine—to claim the reward. Locals believe the reef calms once her gaze is gone."
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
