
import InboxScreen from './InboxScreen';
import { Mockstore } from './TaskList.stories';
import { MockedState } from './TaskList.stories';


export default {
    component: InboxScreen,
    title: 'InboxScreen',
    decorators: [(story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>], // Default setup
    tags: ['autodocs'],
  };
  
  export const Default = {
    decorators: [(story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>],
  };
  
  export const Error = {
    decorators: [(story) => <Mockstore taskboxState={{ ...MockedState, error: 'Something went wrong' }}>{story()}</Mockstore>],
  };