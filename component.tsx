type ComponentPropType = {
    content: any,
}
export default function Component({ content }: ComponentPropType) {
    return (
        <div><p>something<Button /></p></div>);
};