import oliAvatar from './assets/avatarwoli.jpeg'
import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

const avatarService = (nickname) => `https://unavatar.io/${nickname}`
const users = [
  {
  id:1,
  name: 'Olivia Berroeta Chandía',
  avatar: oliAvatar,
  isFollowing: false,
  nickname:'oliuwu'
},
{
  id:2,
  name:'Homero Simpson',
  avatar:avatarService('homer-simpson'),
  isFollowing:true,
  nickname:'homerosimpson'
},
{
  id:3,
  name:'Eric Cartman',
  avatar:avatarService('ericcartman'),
  isFollowing:true,
  nickname:'thecoon'
}
]

function App() {
  return (
    <section className='App'>
    {users.map(({id,name,avatar,isFollowing, nickname})=><TwitterFollowCard key={id} name={name} avatar={avatar} initialIsFollowing={isFollowing} nickname={nickname}/>)}
    </section>
  
    )
}

export default App
