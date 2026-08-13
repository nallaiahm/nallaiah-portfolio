import { profile } from '../data/portfolioData'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <span className="navbar__logo-mark">&lt;NM/&gt;</span>
          <p className="footer__tagline">{profile.title}</p>
        </div>

        <div className="footer__socials">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={profile.leetcode} target="_blank" rel="noopener noreferrer">LeetCode</a>
        </div>

        <p className="footer__copy">© {year} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
