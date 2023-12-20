import type { NextApiRequest, NextApiResponse, } from 'next'

import executeQuery from '@/fsd-app/db'


type ResponseData = {
  message: string
}


export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  try {
    const result = await executeQuery<ResponseData[]>({
      query: 'SELECT * FROM projects WHERE id=1',
    })

    res.status(200).json(result[ 0 ])
  } catch (error) {
    throw new Error(String(error))
  }
}
