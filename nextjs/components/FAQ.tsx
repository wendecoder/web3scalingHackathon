export const FAQ = () => {

  return(

    <>
    <div className="text-center mb-24 text-white" data-path="0.2.0.0">
              {/* <!-- <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold  bg-orange-50 rounded-full" data-config-id="auto-txt-1-3" data-path="0.2.0.0.0">FREQUENTLY ASK QUESTION</span> --> */}
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold" data-path="0.2.0.0.1">
                <span data-config-id="auto-txt-2-3" data-path="0.2.0.0.1.0">You ask? We </span>
                <span className="font-serif italic" data-config-id="auto-txt-3-3" data-path="0.2.0.0.1.1">answer</span>
              </h1>
            </div>
            <button className="flex mb-8 p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.1">
              <div className="max-w-xl pr-5" data-path="0.2.0.1.0">
                <h3 className="text-xl font-semibold text-red-900" data-config-id="auto-txt-4-3" data-path="0.2.0.1.0.0">Do you provide a complete design style?</h3>
                <p className="mt-3 text-lg text-white-500" data-config-id="auto-txt-5-3" data-path="0.2.0.1.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
              </div>
              <div data-path="0.2.0.1.1">
                <span data-path="0.2.0.1.1.0">
                  <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-1-3" data-path="0.2.0.1.1.0.0">
                    <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" 
                    fill="#FF460C" 
                    data-path="0.2.0.1.1.0.0.0">
                    </path>
                  </svg>
                </span>
              </div>
            </button>
            {/* <!-- <button className="flex mb-8 p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.2">
              <div className="max-w-xl pr-5" data-path="0.2.0.2.0">
              <h3 className="text-xl font-semibold text-black group-hover:" data-config-id="auto-txt-6-3" data-path="0.2.0.2.0.0">Do you provide a complete design style?</h3>
              <p className="hidden group-hover:block mt-3 text-lg text-gray-500" data-config-id="auto-txt-7-3" data-path="0.2.0.2.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
              </div>
              <div data-path="0.2.0.2.1">
                <span className="hidden group-hover:block" data-path="0.2.0.2.1.0">
                  <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-2-3" data-path="0.2.0.2.1.0.0">
                    <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#FF460C" data-path="0.2.0.2.1.0.0.0"></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden" data-path="0.2.0.2.1.1">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-3-3" data-path="0.2.0.2.1.1.0">
                    <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black" data-path="0.2.0.2.1.1.0.0"></path>
                    </svg>
                </span>
              </div>
              </button>
            <button className="flex mb-8 p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.3">
              <div className="max-w-xl pr-5" data-path="0.2.0.3.0">
              <h3 className="text-xl font-semibold text-black group-hover:" data-config-id="auto-txt-8-3" data-path="0.2.0.3.0.0">How was the license?</h3>
              <p className="hidden group-hover:block mt-3 text-lg text-gray-500" data-config-id="auto-txt-9-3" data-path="0.2.0.3.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
              </div>
              <div data-path="0.2.0.3.1">
              <span className="hidden group-hover:block" data-path="0.2.0.3.1.0">
              <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-4-3" data-path="0.2.0.3.1.0.0">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#FF460C" data-path="0.2.0.3.1.0.0.0"></path>
              </svg>
              </span>
              <span className="block group-hover:hidden" data-path="0.2.0.3.1.1">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-5-3" data-path="0.2.0.3.1.1.0">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black" data-path="0.2.0.3.1.1.0.0"></path>
              </svg>
              </span>
              </div>
            </button>
            <button className="flex mb-8 p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.4">
              <div className="max-w-xl pr-5" data-path="0.2.0.4.0">
              <h3 className="text-xl font-semibold text-black group-hover:" data-config-id="auto-txt-10-3" data-path="0.2.0.4.0.0">How was the license?</h3>
              <p className="hidden group-hover:block mt-3 text-lg text-gray-500" data-config-id="auto-txt-11-3" data-path="0.2.0.4.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
              </div>
              <div data-path="0.2.0.4.1">
              <span className="hidden group-hover:block" data-path="0.2.0.4.1.0">
              <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-6-3" data-path="0.2.0.4.1.0.0">
              <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#FF460C" data-path="0.2.0.4.1.0.0.0"></path>
              </svg>
              </span>
              <span className="block group-hover:hidden" data-path="0.2.0.4.1.1">
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-7-3" data-path="0.2.0.4.1.1.0">
              <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black" data-path="0.2.0.4.1.1.0.0"></path>
              </svg>
              </span>
              </div>
              </button>
              <button className="flex mb-8 p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.5">
              <div className="max-w-xl pr-5" data-path="0.2.0.5.0">
                <h3 className="text-xl font-semibold text-black group-hover:" data-config-id="auto-txt-12-3" data-path="0.2.0.5.0.0">How much we can buy this marvelous product?</h3>
                <p className="hidden group-hover:block mt-3 text-lg text-gray-500" data-config-id="auto-txt-13-3" data-path="0.2.0.5.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
              </div>
              <div data-path="0.2.0.5.1">
                <span className="hidden group-hover:block" data-path="0.2.0.5.1.0">
                  <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-8-3" data-path="0.2.0.5.1.0.0">
                  <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#FF460C" data-path="0.2.0.5.1.0.0.0"></path>
                  </svg>
                  </span>
                  <span className="block group-hover:hidden" data-path="0.2.0.5.1.1">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-9-3" data-path="0.2.0.5.1.1.0">
                    <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black" data-path="0.2.0.5.1.1.0.0"></path>
                    </svg>
                    </span>
                    </div>
                    </button>
                    <button className="flex p-8 group w-full items-start justify-between rounded-3xl border border-gray-100 text-left" data-path="0.2.0.6">
                    <div className="max-w-xl pr-5" data-path="0.2.0.6.0">
                    <h3 className="text-xl font-semibold text-black group-hover:" data-config-id="auto-txt-14-3" data-path="0.2.0.6.0.0">Do you have any terms &amp; conditions?</h3>
                    <p className="hidden group-hover:block mt-3 text-lg text-gray-500" data-config-id="auto-txt-15-3" data-path="0.2.0.6.0.1">Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.</p>
                    </div>
              <div data-path="0.2.0.6.1">
                <span className="hidden group-hover:block" data-path="0.2.0.6.1.0">
                  <svg width="17" height="3" viewBox="0 0 17 3" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-10-3" data-path="0.2.0.6.1.0.0">
                  <path d="M15.4619 0.045166H1.46194C1.19673 0.045166 0.942374 0.150523 0.754838 0.338059C0.567302 0.525596 0.461945 0.77995 0.461945 1.04517C0.461945 1.31038 0.567302 1.56474 0.754838 1.75227C0.942374 1.93981 1.19673 2.04517 1.46194 2.04517H15.4619C15.7272 2.04517 15.9815 1.93981 16.1691 1.75227C16.3566 1.56474 16.4619 1.31038 16.4619 1.04517C16.4619 0.77995 16.3566 0.525596 16.1691 0.338059C15.9815 0.150523 15.7272 0.045166 15.4619 0.045166Z" fill="#FF460C" data-path="0.2.0.6.1.0.0.0"></path>
                  </svg>
                </span>
                <span className="block group-hover:hidden" data-path="0.2.0.6.1.1">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-config-id="auto-svg-11-3" data-path="0.2.0.6.1.1.0">
                    <path d="M15.4619 7H9.46194V1C9.46194 0.734784 9.35659 0.48043 9.16905 0.292893C8.98151 0.105357 8.72716 0 8.46194 0C8.19673 0 7.94237 0.105357 7.75484 0.292893C7.5673 0.48043 7.46194 0.734784 7.46194 1V7H1.46194C1.19673 7 0.942374 7.10536 0.754838 7.29289C0.567302 7.48043 0.461945 7.73478 0.461945 8C0.461945 8.26522 0.567302 8.51957 0.754838 8.70711C0.942374 8.89464 1.19673 9 1.46194 9H7.46194V15C7.46194 15.2652 7.5673 15.5196 7.75484 15.7071C7.94237 15.8946 8.19673 16 8.46194 16C8.72716 16 8.98151 15.8946 9.16905 15.7071C9.35659 15.5196 9.46194 15.2652 9.46194 15V9H15.4619C15.7272 9 15.9815 8.89464 16.1691 8.70711C16.3566 8.51957 16.4619 8.26522 16.4619 8C16.4619 7.73478 16.3566 7.48043 16.1691 7.29289C15.9815 7.10536 15.7272 7 15.4619 7Z" fill="black" data-path="0.2.0.6.1.1.0.0"></path>
                  </svg>
                </span>
              </div>
            </button> --> */}
          
            </>
          )
            }