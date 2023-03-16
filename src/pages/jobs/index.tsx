import { GET_JOBS } from "@/lib/api";
import * as React from "react";
import { HiLocationMarker } from "react-icons/hi";
import { MdWork } from "react-icons/md";
import { Jobs } from "@/types/jobs";
import Link from "next/link";
import Loading from "@/components/Loading";
import Layout from "@/layouts/Layout";
import { ApiResponse } from "@/types/jobs";
import Button from "@/components/button/Button";

interface PaginationState {
  currentPage: number;
}

export default function JobsData() {
  const [jobs, setJobs] = React.useState<Jobs[]>([]);
  const [search, setSearch] = React.useState<string>('');
  const [loading, setLoading] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>('');
  const [page, setPage] = React.useState<PaginationState['currentPage']>(1);
  const [totalPages, setTotalPages] = React.useState<ApiResponse['page_count']>(0);
  React.useEffect(() => {
    const fetchData = async (page: number) => {
      setLoading(true);
      try {
        const data = await GET_JOBS(page);
        setTotalPages(data.page_count);
        setJobs(data.results);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
      }
    }
    fetchData(page);
  }, [page]);
  // const { data, error, isLoading } = useQuery({
  //   queryKey: ["jobs"],
  //   queryFn: () => axios.get(`${BASE_URL}/jobs`)
  // });
  return (
    <>
        {
          loading ? <Loading/> : (
            error ? <div>{error}</div> : (
            <Layout>
              <div className='text-black bg-white my-20 min-h-screen'>
                <h1 className="text-xl font-bold text-center my-5">Job List</h1>
                <div className="flex justify-center gap-x-10">
                  <div className="flex flex-col">
                    <p className="text-sm">Search :</p>
                    <input
                      className="bg-white rounded-md text-sm my-3 border border-black px-5 py-2 w-60"
                      placeholder="Search Jobs or Companies..."
                      type="text"
                      onChange={(e) => {
                        setSearch(e.target.value);
                      }}
                    />
                    <div className="mx-auto grid grid-cols-2 gap-5 my-5">
                      <Button
                        onClick={() => {
                          page != 1 ? setPage(page - 1) : false
                        }}>
                        Prev
                      </Button>
                      <Button onClick={() => {
                        page != totalPages ? setPage(page + 1) : false
                      }}>Next</Button>
                    </div>
                    <p>Current Pages: <span className="font-bold">{page}</span></p>
                    <p>Total Pages: <span className="font-bold">{totalPages}</span></p>
                    <div className="mx-2 my-2 text-sm">
                      <p>Filter</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 grid-cols-auto gap-x-7 gap-y-7 md:w-1/2">
                    {
                      jobs.map((job, index) => {
                      if (search == '' || job.name.toLowerCase().includes(search.toLowerCase()) || job.company.name.toLowerCase().includes(search.toLowerCase())) return (
                        <Link
                          key={index}
                          href={`/jobs/${job.id}`}
                        >
                          <div className="flex flex-col justify-between bg-gray-100 p-5 text-sm rounded-lg shadow-md hover:shadow-xl hover:scale-105 ease-in-out transition-all cursor-pointer hover:bg-gray-50">
                            <div>
                                <h1 className="font-semibold text-base mb-1 line-clamp-1 hover:underline hover:text-blue-600 ease-in-out transition-all">{job.name}</h1>
                              <p className="text-md">{job.company.name}</p>
                            </div>
                            <div className="mt-6">
                              <div className="flex mb-3">
                                <HiLocationMarker className="text-xl" />
                                <p className="ml-2">{job.locations[0]?.name}</p>
                              </div>
                              <div className="flex justify-between">
                              <div className="flex">
                                <MdWork className="text-xl" />
                                <p className="ml-2">{job.levels[0].name}</p>
                              </div>
                                <p>Published {job.publication_date.slice(0,10)}</p>
                              </div>
                            </div>
                          </div>
                        </Link>
                      )})
                    }
                  </div>
                </div>
              </div>
            </Layout>
            )
          )
        }
    </>
  )
}