import React, { useState } from 'react';
import moment from 'moment';

function DateTimePretty(Component) {
    return function(props) {
        const timeAgo = moment(props.date).fromNow();
        return <Component {...props} date={timeAgo} />;
    };
}

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    );
}

const DateTimeWithPretty = DateTimePretty(DateTime);

function Video(props) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTimeWithPretty date={props.date} />
        </div>
    );
}

function VideoList(props) {
    return props.list.map(item => <Video key={item.url} url={item.url} date={item.date} />);
}

export default function App() {
    const [list, setList] = useState([
        {
            url: 'https://www.youtube.com/embed/_dK2Zt7NwhQ?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-08-01 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-08-08 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-08-09 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2018-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-12-02 05:24:00'
        },
    ]);

    return (
        <VideoList list={list} />
    );
}
