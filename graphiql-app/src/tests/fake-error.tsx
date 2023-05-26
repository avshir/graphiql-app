// this component is provided for quick testing of error boundary
// insert <FakeError error={true} /> within any component wrapped by error boundary

interface FakeErrorProps {
  error: boolean;
}

export default function FakeError({ error }: FakeErrorProps) {
  if (error) {
    throw new Error('error in the component');
  } else {
    return <></>;
  }
}
