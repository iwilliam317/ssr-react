import React from 'react'
import 'isomorphic-fetch'

const Home = ({repositories}) => (
    <div>
        {repositories.map(repo => <h1>{repo.name}</h1>)}
    </div>
)

Home.getInitialProps = async () => {
    try {
        const response = await fetch('https://api.github.com/users/iwilliam317/repos')
        const repositories = await response.json()
        return { repositories }

    }
    catch (e){
        return (e)
    }
}

export default Home