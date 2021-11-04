import Box from '@Components/basic/Box';
// import { Box } from '@Components/basic'; This will lead us to a dependency loop.

const Flex = () => {
  Box();
  return 'I am Flex'
};

export default Flex;