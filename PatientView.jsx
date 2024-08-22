import React from "react";
import styles from './Patien.css';

const PatientView = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header} />
      <section className={styles.viewPatientWrapper}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/58b8234d7a30584f1394b0ab0ea6abc208ca9ddf6c691a49c4b0686892ec7f66?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.icon} alt="" />
        <h1 className={styles.viewPatient}>View Patient</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.patientInfoWrapper}>
          <div className={styles.patientInfo}>
            <span className={styles.patientName}>KR.NAVEEN , M/20</span>
            <br />
            <span className={styles.patientId}>Patient ID : 205623</span>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f23f207981d34f75c8ec871a964962423c94143616e993e9b89e49a667c749df?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.patientImage} alt="Patient" />
        </div>
        <div className={styles.goalCard}>
          <h2 className={styles.goalReached}>GOAL REACHED</h2>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ee01990f1d5b5770eedf1f75de945726466fee406dbb964933d4b10ad9b9059?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.goalImage} alt="Goal progress" />
          <div className={styles.goalProgress}>
            <div className={styles.goalPercentage}>40%</div>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b356ccad03c3a5d1035cae19a4b789e5180aa940ea1ecbf9ae1e3010e357050?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.goalImage} alt="" />
          </div>
        </div>
        <div className={styles.patientDetails}>
          Phone no : <span className={styles.detailValue}>7094481208</span>
          <br />
          Mail ID : <span className={styles.detailValue}>naveenrenga@gmail.com</span>
          <br />
          Affected side : <span className={styles.detailValue}>Bilateral</span>
          <br />
          Condition : <span className={styles.detailValue}>Ortho</span>
          <br />
          Speciality : <span className={styles.detailValue}>Osteoarthritis</span>
        </div>
        <div className={styles.medicalHistoryWrapper}>
          <div className={styles.medicalHistoryLabel}>Medical History</div>
          <div className={styles.medicalHistoryValue}>Hypertension , DM</div>
        </div>
      </section>
      <footer className={styles.footer}>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/e3ea0071990f4447699601e9e14c98557d0cc9350f88ace43ad8a5e35b38feb1?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.footerIcon} alt="" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/4da0e412f5a6234ef6303a1e7519b16ab279dfd24fcee85e85031dee4f7420e8?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.footerIconMedium} alt="" />
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f7cbab7b20209a186790b1a9969be771dd2b019ff6a13650833b2d83cc3ba089?placeholderIfAbsent=true&apiKey=ea75508308044686ac9dd7ff84eea173" className={styles.footerIconLarge} alt="" />
      </footer>
    </main>
  );
};

export default PatientView;