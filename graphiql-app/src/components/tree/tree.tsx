import { FC, memo, useState } from 'react';
import { usePrevious } from '../../utils/hooks';
import useMeasure from 'react-use-measure';
import { useSpring, a } from '@react-spring/web';
import { Content, Frame, Title, toggle } from './styles';
import * as Icons from '../tree/icons';

interface IIcon {
  style: {
    opacity: number;
    width: string;
    height: string;
    marginRight: number;
    cursor: string;
    verticalAlign: string;
  };
  onClick: () => void;
}

const Tree = memo<
  React.HTMLAttributes<HTMLDivElement> & {
    defaultOpen?: boolean;
    name: string | JSX.Element;
  }
>(({ children, name, style, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const previous = usePrevious(isOpen);
  const [ref, { height: viewHeight }] = useMeasure();
  const { height, opacity, y } = useSpring({
    from: { height: 0, opacity: 0, y: 0 },
    to: {
      height: isOpen ? viewHeight : 0,
      opacity: isOpen ? 1 : 0,
      y: isOpen ? 0 : 20,
    },
  });

  const Icon: FC<IIcon> = Icons[`${children ? (isOpen ? 'Minus' : 'Plus') : 'Close'}SquareO`];

  return (
    <Frame>
      <Icon style={{ ...toggle, opacity: children ? 1 : 0.3 }} onClick={() => setOpen(!isOpen)} />
      <Title style={style}>{name}</Title>
      <Content
        style={{
          opacity,
          height: isOpen && previous === isOpen ? 'auto' : height,
        }}
      >
        <a.div ref={ref} style={{ y }}>
          {children}
        </a.div>
      </Content>
    </Frame>
  );
});

export default Tree;
