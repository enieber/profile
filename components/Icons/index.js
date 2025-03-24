import { styled } from 'styled-components'

// Importe todos os ícones estaticamente
import JavascriptIcon from './javascript.js'
import ProxmoxIcon from './proxmox.js'
import AnsibleIcon from './ansible.js'
import KubernetesIcon from './kubernets.js'
import LxcIcon from './lxc.js'
import GoIcon from './go.js'
import PythonIcon from './python.js'
import OdooIcon from './odoo.js'
import WindowsIcon from './windows.js'
import HardwareIcon from './hardware.js'
import PostgresIcon from './postgres.js'
import PixelfedIcon from './pixelfed.js'
import JavaIcon from './java.js'
import TypescriptIcon from './typescript.js'
import KotlinIcon from './kotlin.js'
import PhpIcon from './php.js'
import WordpressIcon from './wp.js'
import ShopifyIcon from './shopify.js'
import ReactIcon from './react.js'
import NextjsIcon from './next.js'
import CypressIcon from './cypress.js'
import DockerIcon from './docker.js'
import NginxIcon from './nginx.js'
import NodejsIcon from './node.js'
import LinuxIcon from './linux.js'
import AngularjsIcon from './angular.js'
import HerokuIcon from './heroku.js'
import GithubIcon from './github.js'
import GitlabIcon from './gitlab.js'
import AwsIcon from './aws.js'
import RustIcon from './rust.js'
import MastodonIcon from './mastodon.js'
import BehanceIcon from './behance.js'
import RssIcon from './rss.js'
import YoutubeIcon from './youtube.js'
import VuejsIcon from './vue.js'
import NextcloudIcon from './nextcloud.js'
import CcIcon from './cc.js'
import NotFoundIcon from './404.js'

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.column ? 'column' : 'row'};
  align-items: center;
  min-width: 5vw;
  background-color: #f7e9e9;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

  svg path {
    fill: #20134b;
  }

`;

const Title = styled.span`
  padding-left: 5px;
  padding-right: 5px;
  font-size: ${(props) => props.size};
  color: #20134b;
`;

export default function Icons(props) {
  const Icon = selectIcon(props.name);
  const size = props.small ? '1rem': '2rem';
  
  if (props.mode === 'only-icon') {
    return (
      <Container column>
        <Icon color="#20134b" width={size} height={size} />
        <Title size>{props.children}</Title>
      </Container>
    )
  }
  
  return (
    <Container>
      <Icon color="#20134b" width={size} height={size} />
      <Title size>{props.name}</Title>
    </Container>
  )
}

function selectIcon(name) {
  const icons = {
    'js': JavascriptIcon,
    'proxmox': ProxmoxIcon,
    'ansible': AnsibleIcon,
    'kubernetes': KubernetesIcon,
    'lxc': LxcIcon,
    'go': GoIcon,
    'python': PythonIcon,
    'odoo': OdooIcon,
    'windows': WindowsIcon,
    'hardware': HardwareIcon,
    'postgres': PostgresIcon,
    'pixelfed': PixelfedIcon,
    'java': JavaIcon,
    'typescript': TypescriptIcon,
    'kotlin': KotlinIcon,
    'php': PhpIcon,
    'wordpress': WordpressIcon,
    'shopify': ShopifyIcon,
    'react': ReactIcon,
    'react-native': ReactIcon,
    'nextjs': NextjsIcon,
    'cypress': CypressIcon,
    'docker': DockerIcon,
    'docker-compose': DockerIcon,
    'nginx': NginxIcon,
    'nodejs': NodejsIcon,
    'linux': LinuxIcon,
    'angularjs': AngularjsIcon,
    'heroku': HerokuIcon,
    'github': GithubIcon,
    'gitlab': GitlabIcon,
    'aws': AwsIcon,
    'rust': RustIcon,
    'blog': RssIcon,
    'mastodon': MastodonIcon,
    'behance': BehanceIcon,
    'rss': RssIcon,
    'youtube': YoutubeIcon,
    'vuejs': VuejsIcon,
    'nextcloud': NextcloudIcon,
    'cc': CcIcon
  }

  return icons[name] || NotFoundIcon
}