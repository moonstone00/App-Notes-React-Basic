import React from "react";
import { getInitialData } from "../../utils";
import Card from "../../components/Card";
import PrimaryLayout from "../../components/layouts/PrimaryLayout";
import { useAtom } from "jotai";
import { notesAtom } from "../../jotai/atoms";

// class Home extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             count: 0
//         }
//     }

//     render() {
//         const [notes] = useAtom(notesAtom);
//         return (
//             <PrimaryLayout>
//                 <div className="flex flex-col items-center justify-center gap-10"  >
//                     <div>
//                         <h1 className="text-3xl font-semibold mb-6" >Catatan Aktif</h1>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
//                             {getInitialData().map((data, index) => (
//                                 <Card key={index} {...data} />
//                             ))}
//                         </div>
//                     </div>
//                     <div>
//                         <h1 className="text-3xl text-yellow-500 font-semibold mb-6" >Arsip</h1>
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
//                             {getInitialData().map((data, index) => (
//                                 <Card key={index} {...data} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </PrimaryLayout>
//         )
//     }
// }

// export default Home;


export default function Home() {
    const [notes] = useAtom(notesAtom)
  return (
            <PrimaryLayout>
                <div className="flex flex-col items-center justify-center gap-10"  >
                    <div>
                        <h1 className="text-3xl font-semibold mb-6" >Catatan Aktif</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
                            {notes.map((data, index) => (
                                <Card key={index} {...data} />
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl text-yellow-500 font-semibold mb-6" >Arsip</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-stretch">
                            {notes.map((data, index) => (
                                <Card key={index} {...data} />
                            ))}
                        </div>
                    </div>
                </div>
            </PrimaryLayout>
        )
}
