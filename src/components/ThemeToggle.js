import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

function ThemeToggle({ darkMode, onToggle }) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={darkMode ? '라이트 모드로 전환' : '다크 모드로 전환'}
      title={darkMode ? '라이트 모드' : '다크 모드'}
    >
      {darkMode ? <FiSun /> : <FiMoon />}
    </button>
  );
}

export default ThemeToggle;
