import { useEffect, useState } from 'react';
import Feats from './Feats.jsx';

const FEAT_LOADERS = {
  OriginFeats: { title: 'Origin Feats', load: () => import('../../data/feats/originFeats.js').then((m) => m.originFeats) },
  GeneralFeats: { title: 'General Feats', load: () => import('../../data/feats/generalFeats.js').then((m) => m.generalFeats) },
  MasteryFeats: { title: 'Mastery Feats', load: () => import('../../data/feats/masteryFeats.js').then((m) => m.masteryFeats) },
  RacialFeats: { title: 'Racial Feats', load: () => import('../../data/feats/racialFeats.js').then((m) => m.racialFeats) },
  EpicBoons: { title: 'Epic Boons', load: () => import('../../data/feats/epicBoons.js').then((m) => m.epicBoons) },
  MavenArms: { title: 'Maven Arms', load: () => import('../../data/feats/mavenArms.js').then((m) => m.mavenArms) },
};

export default function FeatPageLoader({ section }) {
  const config = FEAT_LOADERS[section];
  const [feats, setFeats] = useState(null);

  useEffect(() => {
    let active = true;
    setFeats(null);
    config?.load().then((data) => active && setFeats(data));
    return () => { active = false; };
  }, [config]);

  if (!config || !feats) return <div className="section-loading">Loading feat catalog…</div>;
  return <Feats title={config.title} feats={feats} />;
}
