import { TwitterFollowCard } from '../TwitterFollowCard'

export const App = () => {
  const users = [{ id: 1, userName: 'midudev', name: 'Miguel Angel Duran', initialIsFollowing: true },
    { id: 2, userName: 'hackchan', name: 'Fabio Rojas', initialIsFollowing: true },
    { id: 3, userName: 'nelima', name: '  Neyla Liliam', initialIsFollowing: false }]
  return (
    <section className='App'>

      {users.map(({ userName, name, initialIsFollowing, id }) =>

        <TwitterFollowCard key={id} userName={userName} initialIsFollowing={initialIsFollowing}>
          {name}
        </TwitterFollowCard>
      )}
    </section>

  )
}
