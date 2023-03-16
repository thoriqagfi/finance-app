import '@testing-library/jest-dom'
import { GET_JOBS } from '@/lib/api'

const jobs = [
    {
      id: 1,
      name: 'Software Engineer',
      short_name: 'software_engineer',
      publication_date: '2021-08-01T00:00:00Z',
      locations: [
        {
          name: 'New York',
        }
      ],
      categories: {
        name: 'Software Engineering',
      },
      levels: [
        {
          name: 'Entry Level',
          short_name: 'entry_level',
        }
      ],
      company: {
        id: 1,
        name: 'Google',
        short_name: 'google',
      },
      contents: `Google is a biggest tech company in the world. We are looking for a software engineer to join our team.`
    }
  ]

jest.mock('axios', () => ({
  get: jest.fn().mockResolvedValue({
    data: [
      {
        id: 1,
        name: 'Software Engineer',
        short_name: 'software_engineer',
        publication_date: '2021-08-01T00:00:00Z',
        locations: [
          {
            name: 'New York',
          }
        ],
        categories: {
          name: 'Software Engineering',
        },
        levels: [
          {
            name: 'Entry Level',
            short_name: 'entry_level',
          }
        ],
        company: {
          id: 1,
          name: 'Google',
          short_name: 'google',
        },
        contents: `Google is a biggest tech company in the world. We are looking for a software engineer to join our team.`
      }
    ]
  })
})
)

describe('GET_JOBS', () => {
  it('Should return a list of jobs', async () => {
    const job = await GET_JOBS(1);
    expect(job).toEqual(jobs)
  })
})