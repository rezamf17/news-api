import React from 'react';
import { Space, Table, DatePicker, DatePickerProps, Card, Button, Image, Col, Row } from 'antd';
import NewsApi from '../api/newsApi'
import { AxiosResponse } from 'axios';
import Moment from '../utility/moment'
import {EyeOutlined} from '@ant-design/icons'


// interface DataType {
//     key: any;
//     newsTitle: any;
//     title: string;
//     description: string;
//     publishedAt: string;
//     // tags: string[];
// }



const {  useEffect, useState } = React;


const News = () => {
    const [news, setNews] = useState([]);
    const [date, setDate] = useState<any>(null);
    const getData = () => {
        NewsApi.getNews('q', '', 'popularity', '08a40b4b61c74dd0a39f86b1f8a29fff').then(result => {
            setNews(result.data.articles)
        })
    }
    useEffect(() => {
        try {
            getData()
        } catch (error) {
            console.log(error)
        }
    }, [])
    const data:any  = [
        // {
            //     key: '1',
            //     newsTitle: 'John',
            //     lastName: 'Brown',
            //     age: 32,
            //     address: 'New York No. 1 Lake Park',
            //     tags: ['nice', 'developer'],
            // },
        ];
        news.forEach( (row:any, index:number) => {
            data.push({
                key : index + 1,
                title : row.title,
                description : row.description,
                urlToImage : row.urlToImage,
                publishedAt : Moment.formatDate(row.publishedAt),
                source : row.source.name,
                url : row.url
            })
        })
        const onChange: DatePickerProps['onChange'] = (date) => {
            setDate(date)
        };
    const columns = [{
        title: 'Image',
        dataIndex: 'urlToImage',
        key: 'urlToImage',
        render: (record:any) => {
            // console.log(record)
           return (
            <div>
                <Image width={200} src={record}/>
            </div>
          );},
        }, 
       {
        title: 'Title',
        dataIndex: 'title', 
        key: 'address',  
       },
       {
        title: 'Description',
        dataIndex: 'description', 
        key: 'description',
       },
       {
        title: 'Published',
        dataIndex: 'publishedAt', 
        key: 'publishedAt',
       },
       {
        title: 'Source',
        dataIndex: 'source', 
        key: 'source',
       },
       {
        title: 'Read Articles',
        dataIndex: 'url', 
        key: 'url',
        render: (url:any) => {
            // console.log(url)
           return (
            <div>
                <Button type='primary' shape="circle" icon={<EyeOutlined />} onClick={() => window.open(url)}></Button>
            </div>
          );
        }, 
       },
       ];
    return (
    <Space direction="vertical" size={16}>
        <Card title="News Api" style={{ width: '100%'}}>
        <Card title="Filter" style={{ width: '95%',  marginLeft : 'auto', marginRight : 'auto', marginBottom : '2em' }}>
        <Row>
            <Col span={2}>Choose Date</Col>
            {/* {JSON.stringify(Moment.searchDate(date))} */}
            <Col span={10}><DatePicker onChange={onChange} value={date}/></Col>
        </Row>
        <Row>
            <Col span={2}>
                <Button type="default">
                    Reset
                </Button>
            </Col>
            <Col span={20}></Col>
            <Col span={2}>
                <Button type="primary">
                    Search
                </Button>
            </Col>
        </Row>
        </Card>
            <Table columns={columns} dataSource={data} bordered style={{width : '95%', marginLeft : 'auto', marginRight : 'auto'}}/>
        </Card>
    </Space>
)
};

export default News;