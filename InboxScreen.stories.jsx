
import InboxScreen from './InboxScreen';
import { Mockstore } from './TaskList.stories';
import { MockedState } from './TaskList.stories';
import {
  fireEvent,
  waitFor,
  within,
  waitForElementToBeRemoved
} from '@storybook/test';



export default {
  component: InboxScreen,
  title: 'InboxScreen',
  decorators: [(story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>], // Default setup
  tags: ['autodocs'],
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await waitForElementToBeRemoved(await canvas.findByTestId('loading'));
    await waitFor(async () => {
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
      });
    }
  };
  
  export const Default = {
    decorators: [(story) => <Mockstore taskboxState={MockedState}>{story()}</Mockstore>],
  };
  
  export const Error = {
    decorators: [(story) => <Mockstore taskboxState={{ ...MockedState, error: 'Something went wrong' }}>{story()}</Mockstore>],
  };
