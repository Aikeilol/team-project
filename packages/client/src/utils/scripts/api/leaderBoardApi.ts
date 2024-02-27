import showAlert from '../showAlert'
import { AxiosError } from 'axios'
import { ILBAddUser, ILBTeam, YandexApiError } from './types'
import { config, yandexApi } from './yandexApi'

const handleApiError = (err: AxiosError<YandexApiError>) => {
  const message = err.response?.data.reason as string
  showAlert(message, 'error')
};
export const addUserToLeaderBoard = async (data: ILBAddUser) => {
  try {
    return await yandexApi.post('/leaderboard', data, config)
  } catch (err) {
    handleApiError(err as AxiosError<YandexApiError>)
    throw err
  }
}

export const getAllLeaders = async (data: ILBTeam) => {
  try {
    return await yandexApi.post('/leaderboard/all', data, config)
  } catch (err) {
    handleApiError(err as AxiosError<YandexApiError>)
    throw err
  }
}

export const getTeamLeaderboard = async (data: ILBTeam, teamName: string) => {
  try {
    return await yandexApi.post(`/leaderboard/${teamName}`, data, config)
  } catch (err) {
    handleApiError(err as AxiosError<YandexApiError>)
    throw err
  }
}
