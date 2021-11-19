import { useWindowSize } from './useWindowSize'
import { useEffect, useState } from 'react'

type DEVICES = 'mobile' | 'desktop' | 'tablet'

interface ICurrentDevice {
  mobile: boolean
  desktop: boolean
  tablet: boolean
  current: DEVICES
}

const getCurrentDeviceByWidth = (width: number) => {
  const deviceType =
    width > 992 ? 'desktop' : width < 768 ? 'mobile' : 'tablet'

  return {
    mobile: 'mobile' === deviceType,
    desktop: 'desktop' === deviceType,
    tablet: 'tablet' === deviceType,
    current: deviceType
  } as ICurrentDevice
}

export const useCurrentDevice = () => {
  const { width } = useWindowSize()
  const [devicesType, setDevicesType] = useState({
    mobile: false,
    desktop: false,
    tablet: false,
    current: 'desktop'
  })

  useEffect(() => {
    setDevicesType(getCurrentDeviceByWidth(width))
  }, [width])

  return devicesType as ICurrentDevice
}
