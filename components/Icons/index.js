import dynamic from 'next/dynamic'

export default function Icons(props) {
  const Icon = selectIcon(props.name);
  return (
    <div>
      <Icon/>
      <span> {props.name}</span>
    </div>
  )
}

function selectIcon(name) {
  switch (name) {
    case 'js':
      return dynamic(() => import('./javascript.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'java':
      return dynamic(() => import('./java.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'typescript':
      return dynamic(() => import('./typescript.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'kotlin':
      return dynamic(() => import('./kotlin.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'php':
      return dynamic(() => import('./php.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'wordpress':
      return dynamic(() => import('./wp.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'shopify':
      return dynamic(() => import('./shopify.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'react':
      return dynamic(() => import('./react.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'react-native':
      return dynamic(() => import('./rn.js'), {
        loading: () => <p>Loading...</p>,
      })          
    case 'nextjs':
      return dynamic(() => import('./next.js'), {
        loading: () => <p>Loading...</p>,
      })          
    case 'cypress':
      return dynamic(() => import('./cypress.js'), {
        loading: () => <p>Loading...</p>,
      })          
    case 'docker':
      return dynamic(() => import('./docker.js'), {
        loading: () => <p>Loading...</p>,
      })          
    case 'docker-compose':
      return dynamic(() => import('./docker.js'), {
        loading: () => <p>Loading...</p>,
      })          
    case 'nginx':
      return dynamic(() => import('./nginx.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'nodejs':
      return dynamic(() => import('./node.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'linux':
      return dynamic(() => import('./linux.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'angularjs':
      return dynamic(() => import('./angular.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'heroku':
      return dynamic(() => import('./heroku.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'github':
      return dynamic(() => import('./github.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'gitlab':
      return dynamic(() => import('./gitlab.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'aws':
      return dynamic(() => import('./aws.js'), {
        loading: () => <p>Loading...</p>,
      })
    case 'rust':
      return dynamic(() => import('./rust.js'), {
        loading: () => <p>Loading...</p>,
      })
    default:
      return dynamic(() => import('./404.js'), {
        loading: () => <p>Loading...</p>,
      })
  }
 }
