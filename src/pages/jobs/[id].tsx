import { useRouter } from "next/router";
import * as React from "react";
import { BASE_URL } from "@/lib/api";
import Layout from "@/layouts/Layout";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "@/components/button/Button";
import Loading from "../Loading";


export default function JobDetail() {
  const router = useRouter();
  const { id } = router.query;
  // const id_: number = id;
  const fetchData = async () => {
    return await axios.get(`${BASE_URL}/jobs/${id}`)
  }

  const { data, isLoading, error } = useQuery({
    queryKey: ["job_detail", id],
    queryFn: fetchData,
    // select: (data) => data,
  })
  if(isLoading) return <Loading/>
  if(error) return 'Error' + error
  return (
    <>
      <Layout>
        <div className="bg-white text-black relative z-0 pt-28 mx-20">
          <h1 className="text-center font-bold text-2xl">Jobs Detail</h1>
          {
            data?.data && (
              <div className="my-10 w-1/2 mx-auto border-black p-5 border rounded-xl shadow-xl">
                <div className="flex justify-between">
                  <div>
                    <h1 className="font-medium text-xl">{data.data?.name}</h1>
                    <p className="text-md text-blue-500 cursor-pointer">{data.data?.company.name}</p>
                    <p className="text-sm">{data.data?.locations[0].name}</p>
                    <Button size="sm" className="my-5">
                      Apply Now
                    </Button>
                  </div>
                  <div className="text-end">
                    <p className="text-sm">{data.data?.levels[0].name}</p>
                    <p className="text-sm text-blue-500 cursor-pointer">{data.data?.categories[0].name}</p>
                    <p className="text-sm">Published: {data.data?.publication_date.slice(0,10)}</p>
                  </div>
                </div>
                <hr className="my-3" />
                  {/* {data?.data.contents} */}
                <div className="flex flex-col gap-y-5 my-2 text-sm" dangerouslySetInnerHTML={{__html: data?.data.contents}}></div>
              </div>
            )
          }
        </div>
      </Layout>
    </>
  )
}