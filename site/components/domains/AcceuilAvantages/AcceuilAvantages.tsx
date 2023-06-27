import React, { FC } from 'react';
import Image from 'next/image';
import * as styles from './AcceuilAvantages.module.scss';
import logoFiabilite from '../../../public/assets/images/page-acceuil/Fiabilité.png';
import logoQualite from '../../../public/assets/images/page-acceuil/Qualité.png';
import logoFlexibilite from '../../../public/assets/images/page-acceuil/Flexibilité.png';

const AcceuilAvantages: FC = () => (
  <div className={styles.container}>
    <div className={styles.title}>Les avantages JR Distribution</div>
    <div className={styles.cards}>
      <div className={styles.card}>
        <Image src={logoFiabilite} alt='fiabilité' />
        <div className={styles.containerCard}>
          <div>Fiabilité</div>
          <div className={styles.text}>
            JR Distribution, un services flexible et de qualité auprès des professionels du métier de la bouche bisontins depuis 2002 !
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={logoQualite} alt='qualite' />
        <div className={styles.containerCard}>
          <div>Qualité</div>
          <div className={styles.text}>
            Un vaste choix de produits AOC & AOP pour une meilleure qualité et une juste rétribution de nos producteurs partenaires.
          </div>
        </div>
      </div>
      <div className={styles.card}>
        <Image src={logoFlexibilite} alt='flexibilite' />
        <div className={styles.containerCard}>
          <div>Flexibilité</div>
          <div className={styles.text}>
            Livraison sur Besançon en camion refrigeré , retrait sur place ou envoi dans toute la france via le réseau chronofresh de Chronopost pour une chaîne du froid maîtrisée.
            {' '}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AcceuilAvantages;
