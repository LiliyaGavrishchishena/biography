import React from 'react';
import { Transition } from 'react-transition-group';
// styles
import styles from './AsyncProjectsPage.module.css';

const duration = 300;

const defaultStyleLeft = {
  transition: `transform ${duration}ms ease-out`,
  transform: `translateX(-110%)`,
};

const transitionStylesLeft = {
  entering: { transform: `translateX(-110%)` },
  entered: { transform: `translateX(0)` },
};

const defaultStyleRight = {
  transition: `transform ${duration}ms ease-out`,
  transform: `translateX(110%)`,
};

const transitionStylesRight = {
  entering: { transform: `translateX(110%)` },
  entered: { transform: `translateX(0)` },
};

const AsyncProjectsPage = () => (
  <div className={styles.anim}>
    <Transition in timeout={duration} appear>
      {state => (
        <ul className={styles.projects}>
          <li>
            <div
              style={{
                ...defaultStyleLeft,
                ...transitionStylesLeft[state],
              }}
            >
              <h3>
                Entwicklung einer Kommunikationskampagne für die Bundesangentur
                für Arbeit (WiSe 2009-2010)
              </h3>
              <p>
                Erstellung und Realisierung eines Kommunikationskonzeptes zur
                Aktivierung von Hartz IV–Empfängerinnen und -Empfängern
                insbesondere Alleinerziehenden, Jugendlichen, jungen Migranten
                sowie Älteren Ziel ist es, dass möglichst viele
                Leistungsempfänger der Grundsicherung (Hartz-IV Empfänger)
                aktiviert werden.
              </p>
            </div>
          </li>
          <li>
            <div
              style={{
                ...defaultStyleRight,
                ...transitionStylesRight[state],
              }}
            >
              <h3>
                ERHARD SPORT - Grundlagenforschung in Form einer Umwelt- und
                Unternehmensanalyse
              </h3>
              <p>
                Erhard Sport International mit Sitz in Rotheburg o.d.Tauber, ist
                einer der führenden Hersteller und Lieferanten der Sportgeräte-
                und Sportartikelindustrie in Deutschland. Zur Sicherung der
                Marktführerschaft und angesichts der immer härter werdenden
                Konkurrenz hat Erhard Sport ein unternehmensexternes
                Marktforschungsprojekt veranlasst. Das Marketforschungsteam der
                Hochschule Ansbach hat intensive Grundlagenforschung betrieben
                und umfangreiche interne und externe Analysen durchgeführt,
              </p>
            </div>
          </li>
        </ul>
      )}
    </Transition>
  </div>
);

export default AsyncProjectsPage;
