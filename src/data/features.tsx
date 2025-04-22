import {
  CheckCircleOutlined,
  OutlinedFlagOutlined,
  HistoryOutlined,
  ViewCompactAltOutlined,
  AttachFileOutlined,
  PeopleOutlineOutlined
} from '@mui/icons-material';

const features = [
  {
    icon: <CheckCircleOutlined color="primary" fontSize="medium" />,
    title: 'Tasks',
    description: 'Break work into manageable pieces for you and your team.'
  },
  {
    icon: <OutlinedFlagOutlined color="primary" fontSize="medium" />,
    title: 'Milestones',
    description: 'Visualise significant checkpoints in your project.'
  },
  {
    icon: <HistoryOutlined color="primary" fontSize="medium" />,
    title: 'Due dates and times',
    description: 'Specify the date and time something is due.'
  },
  {
    icon: <ViewCompactAltOutlined color="primary" fontSize="medium" />,
    title: 'Custom templates',
    description: 'Create your own project templates.'
  },
  {
    icon: <AttachFileOutlined color="primary" fontSize="medium" />,
    title: 'Attachments',
    description: 'Add files from various sources to any task.'
  },
  {
    icon: <PeopleOutlineOutlined color="primary" fontSize="medium" />,
    title: 'Teammate',
    description: 'Understand teammate workloads by viewing assigned tasks.'
  }
];

export default features;
