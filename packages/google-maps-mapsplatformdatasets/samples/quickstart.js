// Copyright 2023 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

'use strict';

function main(parent) {
  // [START mapsplatformdatasets_quickstart]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the project to list all the datasets for.
   */
  // const parent = 'abc123'
  /**
   *  The maximum number of versions to return per page.
   *  If unspecified (or zero), at most 1000 datasets will be returned.
   *  The maximum value is 1000; values above 1000 will be coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  The page token, received from a previous GetDatasetVersions call.
   *  Provide this to retrieve the subsequent page.
   */
  // const pageToken = 'abc123'

  // Imports the Mapsplatformdatasets library
  const {MapsPlatformDatasetsV1AlphaClient} =
    // eslint-disable-next-line node/no-missing-require
    require('@googlemaps/maps-platform-datasets').v1alpha;

  // Instantiates a client
  const mapsplatformdatasetsClient = new MapsPlatformDatasetsV1AlphaClient();

  async function callListDataset() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = await mapsplatformdatasetsClient.listDatasetsAsync(
      request
    );
    for await (const response of iterable) {
      console.log(response);
    }
  }

  callListDataset();
  // [END mapsplatformdatasets_quickstart]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));