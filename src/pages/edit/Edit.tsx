import { Button, Input, Modal, Select, Table } from '@arco-design/web-react'
import { useContext, useMemo, useState } from 'react'
import { logoLevelItems } from '../../constants/logo'
import { ALL_HERO_LIST } from '../../constants/show'
import { ColumnProps } from '@arco-design/web-react/es/Table'
import { AppContext } from '../../stores/useAppContext'
import { useNavigate } from 'react-router-dom'

export const Edit = () => {
  const { setShowItems } = useContext(AppContext)
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false)
  const [local, setLocal] = useState(
    JSON.parse(localStorage.getItem('local')!) || {
      province: '广东',
      municipal: '深圳',
      district: '南山'
    }
  )

  const data = useMemo(
    () =>
      ALL_HERO_LIST.map((item, index) => ({
        name: item.name,
        id: index,
        logo: undefined,
        url: item.src
      })),
    []
  )

  const [tabelValue, setTableValue] = useState(data)
  const [query, setQuery] = useState('')
  const columns: ColumnProps[] = [
    { title: '英雄', width: 200, dataIndex: 'name' },
    {
      title: '标',
      dataIndex: 'logo',
      width: 200,
      render: (_, __, index) => (
        <Select
          className="w-[150px]"
          allowClear
          onChange={(value) => {
            const temp = [...tabelValue]
            temp[index].logo = value
            setTableValue(temp)
          }}
        >
          {logoLevelItems.map((option) => (
            <Select.Option key={option.key} value={option.key}>
              {option.name}
            </Select.Option>
          ))}
        </Select>
      )
    }
  ]

  const getInfo = () => {
    const filterList = tabelValue.filter((item) => item.logo !== undefined)
    setShowItems(filterList)
    navigate('./show')
  }
  const setInfo = () => {
    localStorage.setItem('local', JSON.stringify(local))
    setVisible(false)
  }

  return (
    <div className="mx-[10px]">
      <div className="my-[10px] flex justify-between">
        {/* <Input.Search
          className="w-[200px]"
          placeholder="搜索英雄"
          onChange={(value) => {
            setQuery(value)
          }}
        /> */}
        <div className="space-x-2">
          <Button type="primary" onClick={() => setVisible(true)}>
            设置
          </Button>
          <Button status="success" onClick={getInfo}>
            生成
          </Button>
        </div>
      </div>
      <Table
        rowKey="id"
        columns={columns}
        data={tabelValue.filter((item) => item.name.includes(query))}
        pagination={false}
      />

      <Modal title="设置" visible={visible} onOk={setInfo} onCancel={() => setVisible(false)}>
        <Input
          className="mb-2"
          placeholder="输入省份"
          value={local.province}
          onChange={(v) => setLocal({ ...local, province: v })}
        />
        <Input
          className="mb-2"
          placeholder="输入市"
          value={local.municipal}
          onChange={(v) => setLocal({ ...local, municipal: v })}
        />
        <Input
          className="mb-2"
          placeholder="输入区"
          value={local.district}
          onChange={(v) => setLocal({ ...local, district: v })}
        />
      </Modal>
    </div>
  )
}
