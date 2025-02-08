import React from 'react';

const BlogSkeleton = () => {
    return (
        <>
            {/* component */}
            <div className="flex min-h-screen items-center justify-center">
                <div className="w-1/3">
                    {
                        Array.from({ length:6}).map((_, i) => (
                            <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
                                <div className="h-48 bg-gray-300"/>
                                <div className="px-6 py-4">
                                    <div className="h-6 bg-gray-300 mb-2"/>
                                    <div className="h-4 bg-gray-300 w-2/3"/>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <div className="h-4 bg-gray-300 w-1/4 mb-2"/>
                                    <div className="h-4 bg-gray-300 w-1/2"/>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>

    );
};

export default BlogSkeleton;