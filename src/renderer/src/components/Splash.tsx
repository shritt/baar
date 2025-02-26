import ProspectIcon from '../assets/prospect.png'

const Splash = (): JSX.Element => {
  return (
    <div className="p-5 flex items-center justify-center min-h-screen drag">
      <img src={ProspectIcon} alt="" style={{ maxWidth: 150 }} />
    </div>
  )
}

export default Splash
