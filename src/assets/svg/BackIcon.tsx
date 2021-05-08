import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export default () => {
  return (
    <Svg width={29} height={25} viewBox="0 0 29 25" fill="none">
      <Path
        d="M27.37 10.226l.045.01H8.01l6.1-6.114c.299-.299.463-.703.463-1.127 0-.425-.164-.826-.463-1.125l-.95-.95a1.574 1.574 0 00-1.12-.464c-.424 0-.822.164-1.12.463L.462 11.375c-.3.3-.463.699-.462 1.123-.001.427.163.827.462 1.126L10.92 24.081c.298.299.696.463 1.12.463.425 0 .822-.165 1.12-.463l.95-.95a1.57 1.57 0 00.463-1.12c0-.424-.164-.801-.463-1.1l-6.17-6.147h19.452c.874 0 1.608-.753 1.608-1.627v-1.343c0-.874-.756-1.568-1.63-1.568z"
        fill="#000"
      />
    </Svg>
  );
};