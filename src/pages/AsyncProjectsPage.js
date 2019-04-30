import React from 'react';
// styles
import styles from './AsyncProjectsPage.module.css';

const AsyncProjectsPage = () => (
  <div>
    <ul className={styles.projects}>
      <li>
        <h3>
          Entwicklung einer Kommunikationskampagne für die Bundesangentur für
          Arbeit (WiSe 2009-2010)
        </h3>
        <p>
          Erstellung und Realisierung eines Kommunikationskonzeptes zur
          Aktivierung von Hartz IV–Empfängerinnen und -Empfängern insbesondere
          Alleinerziehenden, Jugendlichen, jungen Migranten sowie Älteren Ziel
          ist es, dass möglichst viele Leistungsempfänger der Grundsicherung
          (Hartz-IV Empfänger) aktiviert werden.
        </p>
      </li>
      <li>
        <h3>
          ERHARD SPORT - Grundlagenforschung in Form einer Umwelt- und
          Unternehmensanalyse
        </h3>
        <p>
          Erhard Sport International mit Sitz in Rotheburg o.d.Tauber, ist einer
          der führenden Hersteller und Lieferanten der Sportgeräte- und
          Sportartikelindustrie in Deutschland. Zur Sicherung der
          Marktführerschaft und angesichts der immer härter werdenden Konkurrenz
          hat Erhard Sport ein unternehmensexternes Marktforschungsprojekt
          veranlasst. Das Marketforschungsteam der Hochschule Ansbach hat
          intensive Grundlagenforschung betrieben und umfangreiche interne und
          externe Analysen durchgeführt,
        </p>
      </li>
    </ul>
  </div>
);

export default AsyncProjectsPage;
