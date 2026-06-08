import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

function ThemeToggle({ lightMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={lightMode ? '다크 모드로 전환' : '라이트 모드로 전환'}
      title={lightMode ? '다크 모드' : '라이트 모드'}
    >
      {lightMode ? <FiMoon /> : <FiSun />}
    </button>
  );
}

export default ThemeToggle;
