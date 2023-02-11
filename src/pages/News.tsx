import React from 'react';
import { Space, Table, Tag, Card, Button } from 'antd';
import NewsApi from '../api/newsApi'
import { AxiosResponse } from 'axios';

const { Column } = Table;

interface DataType {
    key: React.Key;
    newsTitle: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

const data: DataType[] = [
    {
        key: '1',
        newsTitle: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        newsTitle: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        newsTitle: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '4',
        newsTitle: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '5',
        newsTitle: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '6',
        newsTitle: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '7',
        newsTitle: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '8',
        newsTitle: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '9',
        newsTitle: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
    {
        key: '10',
        newsTitle: 'John',
        lastName: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        newsTitle: 'Jim',
        lastName: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        newsTitle: 'Joe',
        lastName: 'Black',
        age: 32,
        address: 'Sydney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

const {  useEffect, useState } = React;


const News = () => {
    const [news, setNews] = useState<AxiosResponse | null | void>(null);
    useEffect(() => {
        try {
            NewsApi.getNews('q', '2023-02-11&', 'popularity', '08a40b4b61c74dd0a39f86b1f8a29fff').then(result => {
                setNews(result.data)
            })
            
        } catch (error) {
            console.log(error)
        }
    }, [])
    console.log(news)
    return (
    <Space direction="vertical" size={16}>
        <Card title="News Api" style={{ width: 900 }}>
            <Table dataSource={data}>
                <Column title="News Title" dataIndex="newsTitle" key="newsTitle" />
                <Column title="Age" dataIndex="age" key="age" />
                <Column title="Address" dataIndex="address" key="address" />
                <Column
                    title="Tags"
                    dataIndex="tags"
                    key="tags"
                    render={(tags: string[]) => (
                        <>
                            {tags.map((tag) => (
                                <Tag color="blue" key={tag}>
                                    {tag}
                                </Tag>
                            ))}
                        </>
                    )}
                />
                <Column
                    title="Action"
                    key="action"
                    render={(_: any, record: DataType) => (
                        <Space size="middle">
                            <Button type="primary">View</Button>
                        </Space>
                    )}
                />
            </Table>
        </Card>
    </Space>
)
};

export default News;