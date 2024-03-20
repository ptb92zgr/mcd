import styles from './Rock.module.css';
import rockImg from '../../../assets/rocks-images/1.jpg';

function Rock() {
  return (
    <div className={`card ${styles.rock}`}>
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img src={rockImg} alt="" className="img-fluid img-thumbnail" />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col">
                <p>
                  <span className={styles.rockProperty}>Nazwa skały: </span>Góra
                  Zborów
                </p>

                <p>
                  <span className={styles.rockProperty}>Miejscowość: </span>
                  Podlesice
                </p>
                <p>
                  <span className={styles.rockProperty}>Współrzędne: </span>
                  50.57333005779359, 19.530518033374655
                </p>
                <p>
                  <span className={styles.rockProperty}>Ilośc dróg: </span>15
                </p>
                <p>
                  <span className={styles.rockProperty}>Średnia wycena: </span>
                  6a
                </p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu mi
              bibendum neque egestas congue quisque egestas diam.{' '}
            </p>
            <a href="#" className=" btn btn-primary">
              Poka więcej
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rock;
