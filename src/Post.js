

const Post = ({ lists }) => {
    console.log(lists)
    return (
        <>
            <div style={{ width: "800px", margin: "0 auto" }}>
                <h1 style={{ textAlign: "center" }}>POST</h1>
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
                    {
                        lists?.map((image) => {
                            return <>
                                <div>
                                    <img loading="lazy" src={image.url} height={250} width={250} />
                                </div>
                            </>
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Post