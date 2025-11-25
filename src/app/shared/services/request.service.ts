import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { RequestDto, EditRequestDto, DeleteRequestDto, UpdateRequestStatusListDto, CopyRequestDto, UpdateClose_Status, RequestsbyId, RequestBySubcontractorId, DeleteMultiRequestDto } from 'app/views/Models/RequestDto';
import { PlansDto } from 'app/views/Models/PlansDto';
import { SearchRequestDto } from 'app/views/Models/SearchRequestDto';
import { AddNotes, UpdateNotes, UpdateSafety, UpdateTime } from 'app/views/Models/MultiRequestUpdateDto';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  SelectedRequestData: any = {};
  bulidingFloorData: any = [];

  catDialogservice = new EventEmitter<any>();
  DeleteActivityEmitter = new EventEmitter<any>();

  constructor(private http: HttpClient) { }

   bulidingDataWithIds() {
    this.bulidingFloorData = [
      {
        buildingId: '13',
        planType: "B1 Ground Floor",
        zoneList: [
          {
            floorName: 'Building1 Ground Floor Zones',
            zoneSubList: [
              {
          value: 'BEDROOM 1',
          className: "zone-1-1-ba",
          isSelected: false
        },
        {
          value: 'BEDROOM 2',
          className: "zone-2-1-ba",
          isSelected: false
        },
        {
          value: 'Kitchen',
          className: "zone-3-1-ba",
          isSelected: false
        },
        {
          value: 'Lobby',
          className: "zone-4-1-ba",
          isSelected: false
        },
        {
          value: 'BATH',
          className: "zone-5-1-ba",
          isSelected: false
        },
        {
          value: 'WC',
          className: "zone-6-1-ba",
          isSelected: false
        },
        {
          value: 'Drawing Area',
          className: "zone-7-1-ba",
          isSelected: false
        }
            ]
          },

        ]
      },
      {
        buildingId: '13',
        planType: "B1 First Floor",
        zoneList: [
          {
            floorName: 'Building1 First Floor Zones',
            zoneSubList: [
{
          value: 'BEDROOM',
          className: "zone-1-2-ba",
          isSelected: false
        },
        {
          value: 'KIDS BEDROOM',
          className: "zone-2-2-ba",
          isSelected: false
        },
        {
          value: 'TOILET',
          className: "zone-3-2-ba",
          isSelected: false
        },
        {
          value: 'DINING HALL',
          className: "zone-4-2-ba",
          isSelected: false
        },
        {
          value: 'KITCHEN',
          className: "zone-5-2-ba",
          isSelected: false
        },
        {
          value: 'LIVING',
          className: "zone-6-2-ba",
          isSelected: false
        },
            ]
          },

        ]
      },
      {
        buildingId: '14',
        planType: "B2 Ground Floor",
        zoneList: [
          {
            floorName: 'Building2 Ground Floor Zones',
            zoneSubList: [
{
          value: 'WIR 1',
          className: "zone-1-1-ba2",
          isSelected: false
        },
        {
          value: 'SITTING',
          className: "zone-2-1-ba2",
          isSelected: false
        },
        {
          value: 'VOID',
          className: "zone-3-1-ba2",
          isSelected: false
        },
        {
          value: 'WIR 2',
          className: "zone-4-1-ba2",
          isSelected: false
        },
        {
          value: 'RESORT SUITE',
          className: "zone-5-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 4',
          className: "zone-6-1-ba2",
          isSelected: false
        },
        {
          value: 'REAR BALCONY',
          className: "zone-7-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 2',
          className: "zone-8-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 3',
          className: "zone-9-1-ba2",
          isSelected: false
        },
        {
          value: 'FRONT BALCONY',
          className: "zone-10-1-ba2",
          isSelected: false
        },
            ]
          },

        ]
      },

{
        buildingId: '14',
        planType: "B2 First Floor",
        zoneList: [
          {
            floorName: 'Building2 First Floor Zones',
            zoneSubList: [
        {
          value: 'FAMILY ROOM',
          className: "zone-1-2-ba2",
          isSelected: false
        },
        {
          value: 'DINING AREA',
          className: "zone-2-2-ba2",
          isSelected: false
        },
        {
          value: 'KITCHEN',
          className: "zone-3-2-ba2",
          isSelected: false
        },
        {
          value: 'CAR GARAGE',
          className: "zone-4-2-ba2",
          isSelected: false
        },
        {
          value: 'STAIRS',
          className: "zone-5-2-ba2",
          isSelected: false
        },
        {
          value: 'BATHROOM',
          className: "zone-6-2-ba2",
          isSelected: false
        },
        {
          value: 'LAUNDRY',
          className: "zone-7-2-ba2",
          isSelected: false
        },
        {
          value: 'DEN',
          className: "zone-8-2-ba2",
          isSelected: false
        },
        {
          value: 'COVERED PORCH',
          className: "zone-9-2-ba2",
          isSelected: false
        },
            ]
          },

        ]
      },

    ]
    return this.bulidingFloorData;
  }
 
  generateBulidFloorData() {
    this.bulidingFloorData = [
         {
        planType: "B1 Ground Floor",
        zoneList: [
          {
            floorName: 'Building1 Ground Floor Zones',
            zoneSubList: [
              {
          value: 'BEDROOM 1',
          className: "zone-1-1-ba",
          isSelected: false
        },
        {
          value: 'BEDROOM 2',
          className: "zone-2-1-ba",
          isSelected: false
        },
        {
          value: 'Kitchen',
          className: "zone-3-1-ba",
          isSelected: false
        },
        {
          value: 'Lobby',
          className: "zone-4-1-ba",
          isSelected: false
        },
        {
          value: 'BATH',
          className: "zone-5-1-ba",
          isSelected: false
        },
        {
          value: 'WC',
          className: "zone-6-1-ba",
          isSelected: false
        },
        {
          value: 'Drawing Area',
          className: "zone-7-1-ba",
          isSelected: false
        }
            ]
          },

        ]
      },
      {
        planType: "B1 First Floor",
        zoneList: [
          {
            floorName: 'Building1 First Floor Zones',
            zoneSubList: [
{
          value: 'BEDROOM',
          className: "zone-1-2-ba",
          isSelected: false
        },
        {
          value: 'KIDS BEDROOM',
          className: "zone-2-2-ba",
          isSelected: false
        },
        {
          value: 'TOILET',
          className: "zone-3-2-ba",
          isSelected: false
        },
        {
          value: 'DINING HALL',
          className: "zone-4-2-ba",
          isSelected: false
        },
        {
          value: 'KITCHEN',
          className: "zone-5-2-ba",
          isSelected: false
        },
        {
          value: 'LIVING',
          className: "zone-6-2-ba",
          isSelected: false
        },
            ]
          },

        ]
      },
      {
        planType: "B2 Ground Floor",
        zoneList: [
          {
            floorName: 'Building2 Ground Floor Zones',
            zoneSubList: [
{
          value: 'WIR 1',
          className: "zone-1-1-ba2",
          isSelected: false
        },
        {
          value: 'SITTING',
          className: "zone-2-1-ba2",
          isSelected: false
        },
        {
          value: 'VOID',
          className: "zone-3-1-ba2",
          isSelected: false
        },
        {
          value: 'WIR 2',
          className: "zone-4-1-ba2",
          isSelected: false
        },
        {
          value: 'RESORT SUITE',
          className: "zone-5-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 4',
          className: "zone-6-1-ba2",
          isSelected: false
        },
        {
          value: 'REAR BALCONY',
          className: "zone-7-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 2',
          className: "zone-8-1-ba2",
          isSelected: false
        },
        {
          value: 'BED 3',
          className: "zone-9-1-ba2",
          isSelected: false
        },
        {
          value: 'FRONT BALCONY',
          className: "zone-10-1-ba2",
          isSelected: false
        },
            ]
          },

        ]
      },

{
        planType: "B2 First Floor",
        zoneList: [
          {
            floorName: 'Building2 First Floor Zones',
            zoneSubList: [
        {
          value: 'FAMILY ROOM',
          className: "zone-1-2-ba2",
          isSelected: false
        },
        {
          value: 'DINING AREA',
          className: "zone-2-2-ba2",
          isSelected: false
        },
        {
          value: 'KITCHEN',
          className: "zone-3-2-ba2",
          isSelected: false
        },
        {
          value: 'CAR GARAGE',
          className: "zone-4-2-ba2",
          isSelected: false
        },
        {
          value: 'STAIRS',
          className: "zone-5-2-ba2",
          isSelected: false
        },
        {
          value: 'BATHROOM',
          className: "zone-6-2-ba2",
          isSelected: false
        },
        {
          value: 'LAUNDRY',
          className: "zone-7-2-ba2",
          isSelected: false
        },
        {
          value: 'DEN',
          className: "zone-8-2-ba2",
          isSelected: false
        },
        {
          value: 'COVERED PORCH',
          className: "zone-9-2-ba2",
          isSelected: false
        },
            ]
          },

        ]
      },


    ]
    return this.bulidingFloorData;
  }

  public GetAllSites(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/sites.php');
  }
  public GetAllBuildingsbyid(siteid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/buildings.php?siteid=' + siteid);
  }
  public GetAllFloorsbyid(bid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/floors.php?bid=' + bid);
  }
  public GetAllRoomsbyid(flid): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'common/rooms.php?flid=' + flid);
  }

  public GetAllRequests(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'request/read.php');
  }
      public GetAllNotifications(): Observable<any[]> {
    return this.http.get<any[]>(environment.API_URL + 'request/notificationlist.php');
  }
  public GetAllRequestsByid(res: RequestBySubcontractorId): Observable<any[]> {
    return this.http.post<any[]>(environment.API_URL + 'request/readrequestid.php', res);
  }

  public GetRequestsImagesByid(id): Observable<any[]> {
    return this.http.get<any>(environment.API_URL + 'request/readImageslist.php?requestId=' + id);
  }

  public GetRequestsLogs(id: RequestsbyId): Observable<any[]> {
    return this.http.post<any>(environment.API_URL + 'request/readLogs.php', id);
  }

  public CreateNewRequest(req): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/create.php', req);
  }
  public UpdateRequest(req: EditRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/update.php', req);
  }
  public UpdateListStatusRequest(req: UpdateRequestStatusListDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/update_status.php', req);
  }
  public DeleteRequest(req: DeleteRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/delete.php', req);
  }
  public DeleteMultiRequest(req: DeleteMultiRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/multipledelete.php', req);
  }
  public GetPlans(req: PlansDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/planslist.php', req);
  }
  public CopyRequest(req: CopyRequestDto): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/createbycount.php', req);
  }

  public SearchRequest(req: SearchRequestDto): Observable<any> {
    // req: readrequestinfo
    return this.http.post<any>(environment.API_URL + 'request/searchlist.php', req);
  }

  public CloseRequest(formData): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/upload.php', formData);
  }


  public UpdateListReqstNote(req: UpdateNotes): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateNotes.php', req);
  }
     
    public AddListReqstNote(req: AddNotes): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/addnote.php', req);
  }
  public UpdateListReqstSafety(req: UpdateSafety): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateSafety.php', req);
  }
  public UpdateListReqstTime(req: UpdateTime): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/updateStartTime.php', req);
  }

  // pagination
  public listpagination(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + 'request/readrequestinfo.php', data);
  }

  public addCategory(data): Observable<any> {
    return this.http.post<any>(environment.API_URL + "category/create.php", data);
  }

  public readCategory(): Observable<any> {
    return this.http.get(environment.API_URL + "category/read.php");
  }

  public deleteActivity(data): Observable<any> {
    return this.http.post(environment.API_URL + "category/delete.php", data);
  }

      public deleteRamsFile(data): Observable<any> {
    return this.http.post(environment.API_URL + "request/ramsfiledelete.php", data);
  }

  public addRamsFiles(data): Observable<any> {
    return this.http.post(environment.API_URL + "request/multiramsfile.php", data);
  }

  // public SetselectedRequest(row)
  // {
  //   this.SelectedRequestData=row;
  // }
  // public GetSelectedRequestData():Observable<any[]> {
  //   return this.SelectedRequestData;
  // }
}
