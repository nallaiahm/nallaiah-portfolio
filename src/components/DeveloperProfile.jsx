import { profile } from '../data/portfolioData'
import Reveal from './Reveal'

const focusAreas = [
  'Problem Solving',
  'Logical Reasoning',
  'Analytical Thinking',
  'C Programming',
  'Data Structures — Basics',
  'Algorithms — Basics',
]

export default function DeveloperProfile() {
  return (
    <section id="developer-profile" className="section section--tight">
      <div className="container">
        <div className="dev-profile card">
          <div className="dev-profile__text">
            <Reveal>
              <span className="eyebrow"></span>
              <h2 className="section-title">Built on logic, not shortcuts</h2>
              <p className="section-sub" style={{ marginBottom: 24 }}>
                C programming shaped the way I think — breaking problems down before writing a single line of
                code. I sharpen that habit through consistent practice on LeetCode.
              </p>
            </Reveal>
            <Reveal delay={1} className="dev-profile__tags">
              {focusAreas.map((area) => (
                <span className="tag" key={area}>
                  {area}
                </span>
              ))}
            </Reveal>
            <Reveal delay={2}>
              <a href={profile.leetcode} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                View LeetCode Profile
              </a>
            </Reveal>
          </div>

          <div className="dev-profile__code" aria-hidden="true">
            <pre>{`int solve(int* nums, int n) {
    int best = 0, sum = 0;
    for (int i = 0; i < n; i++) {
        sum = sum + nums[i] > nums[i]
            ? sum + nums[i]
            : nums[i];
        best = sum > best ? sum : best;
    }
    return best;
}`}</pre>
          </div>
        </div>
      </div>
    </section>
  )
}
