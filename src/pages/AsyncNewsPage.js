import React from 'react';
import { Transition } from 'react-transition-group';
// styles
import styles from './AsyncNewsPage.module.css';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const AsyncNewsPage = () => (
  <div className={styles.anim}>
    <Transition in timeout={duration} appear>
      {state => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
        >
          <ul className={styles.news}>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
            <li className={styles.item}>
              <h3 className={styles.title}>
                Lorem ipsum dolor Vero rerum est sit.
              </h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Deleniti quos quia velit perspiciatis vero harum nihil. Vero
                rerum est sit, iste enim culpa alias eligendi magnam ratione
                repellendus ab obcaecati?Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Deleniti quos quia velit perspiciatis vero
                harum nihil. Vero rerum est sit, iste enim culpa alias eligendi
                magnam ratione repellendus ab obcaecati?Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Deleniti quos quia velit
                perspiciatis vero harum nihil. Vero rerum est sit, iste enim
                culpa alias eligendi magnam ratione repellendus ab obcaecati?
              </p>
            </li>
          </ul>
        </div>
      )}
    </Transition>
  </div>
);

export default AsyncNewsPage;
