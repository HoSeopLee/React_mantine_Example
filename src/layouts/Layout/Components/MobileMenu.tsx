import { Navbar, Group, Code, ScrollArea, createStyles } from '@mantine/core';
import {
  IconNotes,
  IconCalendarStats,
  IconGauge,
  IconPresentationAnalytics,
  IconFileAnalytics,
  IconAdjustments,
  IconLock,
} from '@tabler/icons';
import { LinksGroup } from './NavbarLinksGroup';

const useStyles = createStyles((theme) => ({
  navbar: {
    width: '100vw',
    height: '50vh',
    display: 'flex',
    position: 'absolute',
    top: 29,
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
  activeNavbar: {
    display: 'none',
  },
  textStyle: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    overflowWrap: 'break-word',
    background: 'blue',
  },
  header: {
    padding: theme.spacing.md,
    paddingTop: 0,
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
  linksInner: {
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
  },
  links: {
    marginLeft: -theme.spacing.md,
    marginRight: -theme.spacing.md,
  },
}));

const mockdata = [
  { label: 'Dashboard', icon: IconGauge },
  {
    label: 'Market news',
    icon: IconNotes,
    initiallyOpened: false,
    links: [
      { label: 'Overview', link: '/' },
      { label: 'Forecasts', link: '/' },
      { label: 'Outlook', link: '/' },
      { label: 'Real time', link: '/' },
    ],
  },
  {
    label: 'Releases',
    icon: IconCalendarStats,
    links: [
      { label: 'Upcoming releases', link: '/' },
      { label: 'Previous releases', link: '/' },
      {
        label: 'Releases schedule',
        link: '/',
        links: [
          { label: 'Overview', link: '/' },
          { label: 'Forecasts', link: '/' },
          { label: 'Outlook', link: '/' },
          { label: 'Real time', link: '/' },
        ],
      },
    ],
  },
  { label: 'Analytics', icon: IconPresentationAnalytics },
  { label: 'Contracts', icon: IconFileAnalytics },
  { label: 'Settings', icon: IconAdjustments },
  {
    label: 'Security',
    icon: IconLock,
    links: [
      { label: 'Enable 2FA', link: '/' },
      { label: 'Change password', link: '/' },
      { label: 'Recovery codes', link: '/' },
    ],
  },
];
const MobileMenu = ({ open = true }) => {
  const { classes, cx } = useStyles();
  const links = mockdata.map((item) => (
    <LinksGroup {...item} key={item.label} />
  ));

  return (
    <div
      className={cx(classes.navbar, {
        [classes.activeNavbar]: !open,
      })}
    >
      <Navbar height={'auto'} p="md" className={classes.navbar}>
        <Navbar.Section grow className={classes.links} component={ScrollArea}>
          <div className={classes.linksInner}>{links}</div>
        </Navbar.Section>
      </Navbar>
    </div>
  );
};

export default MobileMenu;
