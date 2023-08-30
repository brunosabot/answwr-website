import styles from "./layout.module.css";

interface IPrivacyAndroidLayoutProps {
  children: React.ReactNode;
}

export default function PrivacyAndroidLayout({
  children,
}: IPrivacyAndroidLayoutProps) {
  return <main className={styles.main}>{children}</main>;
}
