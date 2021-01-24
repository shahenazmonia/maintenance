import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'umi'
import { Row, Col, Button, Form, Input, Spin, Select } from 'antd'
import { Page } from 'components'
import { Avatar } from '../../services/components/upload'
import './index.less'
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'

@connect(({ packages, loading }) => ({ packages, loading }))
@connect(({ categories }) => ({ categories }))
class CreatePackage extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch({
      type: 'categories/list',
      payload: {},
    })
  }
  onFinish = async (values) => {
    const {
      nameAr,
      nameEn,
      descriptionAr,
      descriptionEn,
      type,
      duration,
      features,
      discount,
      basePrice,
      numberOfVisits,
    } = values
    let formData = new FormData()
    const { dispatch, data, categories } = this.props
    console.log('values', values)
    formData.append('image', this.state.image.file.originFileObj)
    formData.append('nameAr', nameAr)
    formData.append('nameEn', nameEn)
    formData.append('type', type)
    formData.append('descriptionAr', descriptionAr)
    formData.append('descriptionEn', descriptionEn)
    formData.append('duration', duration)
    formData.append('features', features)
    formData.append('discount', discount)
    formData.append('basePrice', basePrice)
    formData.append('numberOfVisits', numberOfVisits)
    // const currentValue = categories.list.filter((elm) => {
    //   if (values.category == elm.nameEn) return elm._id
    // })
    // formData.append(
    //   'category',
    //   currentValue[0] ? currentValue[0]._id : values.category
    // )
    if (data) {
      formData.append('id', data._id)
      await dispatch({
        type: 'packages/update',
        payload: formData,
      })
    } else {
      await dispatch({
        type: 'packages/create',
        payload: formData,
      })
    }
  }

  render() {
    const { categories, loading, data } = this.props
    return (
      <div>
        <Page inner>
          <Spin spinning={loading?.global}>
            <Row justify="center">
              <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                style={{ width: '100%' }}
              >
                <Col span={22}>
                  <Row gutter={40}>
                    <Col lg={12} md={12} xs={24} sm={24}>
                      <Form.Item name="image">
                        <Avatar
                          image={data?.image}
                          getImage={(image) => this.setState({ image })}
                        />
                      </Form.Item>

                      <span>Name Ar</span>
                      <Form.Item
                        name="nameAr"
                        initialValue={data?.nameAr}
                        rules={[
                          { required: true, message: 'Please enter Ar. name' },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <span>Name En</span>
                      <Form.Item
                        name="nameEn"
                        initialValue={data?.nameEn}
                        rules={[
                          { required: true, message: 'Please enter En. name' },
                        ]}
                      >
                        <Input />
                      </Form.Item>

                      <span>Description Ar</span>
                      <Form.Item
                        name="descriptionAr"
                        initialValue={data?.descriptionAr}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter Ar. description',
                          },
                        ]}
                      >
                        <Input.TextArea />
                      </Form.Item>
                      <span>Description En</span>
                      <Form.Item
                        name="descriptionEn"
                        initialValue={data?.descriptionEn}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter En. description',
                          },
                        ]}
                      >
                        <Input.TextArea />
                      </Form.Item>
                      <span>Type</span>
                      <Form.Item
                        name="type"
                        initialValue={data?.type}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter the type',
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <span>Base Price</span>
                      <Form.Item
                        name="basePrice"
                        initialValue={data?.basePrice}
                        rules={[
                          {
                            required: true,
                            message: 'Please penter the Base Price',
                          },
                        ]}
                      >
                        <Input type="number" />
                      </Form.Item>
                    </Col>
                    <Col lg={12} md={12} xs={24} sm={24}>
                      <span>Discount</span>
                      <Form.Item
                        name="discount"
                        initialValue={data?.discount}
                        rules={[
                          { required: true, message: 'Please enter discount' },
                        ]}
                      >
                        <Input type="number" />
                      </Form.Item>
                      <span>Number Of Visit</span>
                      <Form.Item
                        name="numberOfVisits"
                        initialValue={data?.numberOfVisits}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter the number of visit',
                          },
                        ]}
                      >
                        <Input type="number" />
                      </Form.Item>
                      <span>Duration</span>
                      <Form.Item
                        name="duration"
                        initialValue={data?.duration}
                        rules={[
                          {
                            required: true,
                            message: 'Please enter the duration',
                          },
                        ]}
                      >
                        <Input type="number" />
                      </Form.Item>

                      <span>Features</span>
                      <Form.List name="features" initialValue={data?.features}>
                        {(fields, { add, remove }) => (
                          <>
                            {fields.map((field) => (
                              <Row>
                                <Col span={20}>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'category']}
                                    fieldKey={[field.fieldKey, 'category']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'please select category',
                                      },
                                    ]}
                                  >
                                    <Select placeholder="Category">
                                      {categories?.list?.map((elm, index) => {
                                        return (
                                          <Select.Option
                                            key={index}
                                            value={elm._id}
                                          >
                                            {elm.nameEn}
                                          </Select.Option>
                                        )
                                      })}
                                    </Select>
                                  </Form.Item>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'price']}
                                    fieldKey={[field.fieldKey, 'price']}
                                    rules={[
                                      {
                                        required: true,
                                        message: 'please enter the price',
                                      },
                                    ]}
                                  >
                                    <Input placeholder="Price" type="number" />
                                  </Form.Item>
                                  <Form.Item
                                    {...field}
                                    name={[field.name, 'numberOfVisits']}
                                    fieldKey={[
                                      field.fieldKey,
                                      'numberOfVisits',
                                    ]}
                                    rules={[
                                      {
                                        required: true,
                                        message:
                                          'please enter the numberOfVisits',
                                      },
                                    ]}
                                  >
                                    <Input
                                      placeholder="Number Of Visits"
                                      type="number"
                                    />
                                  </Form.Item>
                                </Col>
                                <Col span={3} offset={1}>
                                  <MinusCircleOutlined
                                    onClick={() => remove(field.name)}
                                  />
                                </Col>
                              </Row>
                            ))}
                            <Form.Item>
                              <Button
                                type="dashed"
                                onClick={() => add()}
                                block
                                icon={<PlusOutlined />}
                              >
                                Add Feature
                              </Button>
                            </Form.Item>
                          </>
                        )}
                      </Form.List>
                      <Form.Item>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Col>
              </Form>
            </Row>
          </Spin>
        </Page>
      </div>
    )
  }
}

CreatePackage.propTypes = {
  location: PropTypes.object,
  dispatch: PropTypes.func,
  loading: PropTypes.object,
}

export default CreatePackage