import TimelineCard from "./components/TimelineCard";


const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem. Nunc sed velit dignissim sodales ut. Montes nascetur ridiculus mus mauris vitae ultricies leo. Facilisis magna etiam tempor orci eu lobortis elementum nibh. Dolor purus non enim praesent elementum facilisis. Sit amet luctus venenatis lectus magna fringilla urna porttitor rhoncus. Placerat vestibulum lectus mauris ultrices eros in cursus. Laoreet suspendisse interdum consectetur libero id faucibus.";

const Timeline = () => {
    return (
        <div>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
            <TimelineCard imageUrl={"https://picsum.photos/180/250"} username={"prajwalshenoy"} timeStamp={"2 hours ago"} information={content} userImage={""}/>
        </div>
    );
};

export default Timeline;