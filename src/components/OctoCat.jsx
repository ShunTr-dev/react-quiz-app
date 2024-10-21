import octocat from '../assets/github-mark-white.png'

export default function OctoCat({ url }) {
    
    return (
        <a
            href={url}
            target="_blank"
            aria-label="View source on GitHub"
            style={{ position: 'absolute', top: 10, right: 10, zIndex: 10 }}>
            <img src={octocat} alt="GitHub Octocat" style={{ width: '40px', height: '40px' }} />
        </a>
    )
}
