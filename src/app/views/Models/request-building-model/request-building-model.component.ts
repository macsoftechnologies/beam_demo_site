import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PDFDocumentProxy } from "ng2-pdf-viewer";
import { GetZoneStatusDto } from '../Zone-statusDto';
import { ZoneStatusService } from 'app/shared/services/zone-status.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ChangeDetectorRef } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-request-building-model',
  templateUrl: './request-building-model.component.html',
  styleUrls: ['./request-building-model.component.css']
})
export class RequestBuildingModelComponent implements OnInit {
  floorBlock: Array<any> = [];
  selectedBlock: Array<any> = [];
loadingZones: Set<string> = new Set();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  private dialogRef: MatDialogRef<RequestBuildingModelComponent>,
      private ZoneStatusservice: ZoneStatusService,
      private _snackBar: MatSnackBar,
      private cdr: ChangeDetectorRef) {

  }

      GetZoneStatus: GetZoneStatusDto =
        {
        building_id: null,
        level: null,
        zone: null,
      }

  ngOnInit(): void {
    let selectedBlockData = this.data.selectFloorBlocks.find(item => (item.planType == this.data.floor.planType) && (item.floorName == this.data.floor.name))
    console.log(selectedBlockData, "selectedBlockData")
    if (this.data.floor.name == 'Building1 Ground Floor Zones' && this.data.floor.planType == 'B1 Ground Floor') {

      this.floorBlock = [
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
        },
      ]
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "1")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Building1 First Floor Zones' && this.data.floor.planType == 'B1 First Floor') {

      this.floorBlock = [
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
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "1")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

    else if (this.data.floor.name == 'Building2 Ground Floor Zones' && this.data.floor.planType == 'B2 Ground Floor') {
      this.floorBlock = [
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
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }

     else if (this.data.floor.name == 'Building2 First Floor Zones' && this.data.floor.planType == 'B2 First Floor') {
      this.floorBlock = [
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
      if (selectedBlockData) {
        if ((selectedBlockData.floorName == this.data.floor.name) && (selectedBlockData.planType == this.data.floor.planType)) {
          console.log(selectedBlockData, "2")
          this.floorBlock = selectedBlockData.selectedBlock;
        }
      }
    }
  }

 selectIndividualFloor(selectedBlock: any, isChecked: boolean, zoneName: string, level: string) {
  // Load existing selections from localStorage
  let globalSelected = JSON.parse(localStorage.getItem('globalSelectedBlocks') || '[]');

  if (isChecked) {
    // ✅ Add the selection
    globalSelected.push({ level, value: selectedBlock.value });
    this.GetZonestatus(zoneName, level, selectedBlock?.value, selectedBlock);
  } else {
    // ❌ Remove the selection
    globalSelected = globalSelected.filter(
      (b: any) => !(b.level === level && b.value === selectedBlock.value)
    );
     const index = this.selectedBlock.findIndex(item => item.value === selectedBlock.value);
    if (index > -1) this.selectedBlock.splice(index, 1);
    selectedBlock.isSelected = false;
  }

  // Save updated list back
  if (globalSelected.length > 0) {
    localStorage.setItem('globalSelectedBlocks', JSON.stringify(globalSelected));
  } else {
    // 🗑 If no zones are selected anywhere → clear both
    localStorage.removeItem('firstZoneStatus');
    localStorage.removeItem('globalSelectedBlocks');
  }
}





GetZonestatus(zoneName: string, level: string, area: string, selectedBlock: any) {
  console.log("📡 GetZonestatus called for:", selectedBlock.value);

  this.GetZoneStatus.building_id = this.data.buildingId;
  this.GetZoneStatus.level = level;
  this.GetZoneStatus.zone = zoneName;

  this.ZoneStatusservice.GetIndividualZone(this.GetZoneStatus).subscribe((res: any) => {
    console.log("📥 API response for", selectedBlock.value, ":", res);
    this.loadingZones.delete(selectedBlock.value);

    if (res && res.length > 0) {
      if(res[0].status == "HO") {
        this.openSnackBar("Can't select zone with Hand over status");
        selectedBlock.isSelected = false;
        this.cdr.detectChanges(); 
      } else {
      this.handleZoneStatus(res[0].status, selectedBlock, level);
      }
    } else {
      this.openSnackBar("Can't select zone without status");
      selectedBlock.isSelected = false;
      this.cdr.detectChanges(); 
    }
  });
}

trackByValue(index, item) {
  return item.value;
}

// handleZoneStatus(status: string, selectedBlock: any) {
//   let firstZoneStatus = localStorage.getItem('firstZoneStatus');
//   console.log('🔹 firstZoneStatus from localStorage:', firstZoneStatus);

//   if (!firstZoneStatus && (status === 'UC' || status === 'C')) {
//     console.log('⚡ Setting firstZoneStatus in localStorage to:', status);
//     localStorage.setItem('firstZoneStatus', status);
//     firstZoneStatus = status;
//   }

//   if (status !== firstZoneStatus) {
//     console.log('❌ Status mismatch, blocking selection:', status, '!==', firstZoneStatus);
//     let ZoneStatus: string;
//       if(firstZoneStatus == 'UC') {
//         ZoneStatus = 'Construction';
//       } else if(firstZoneStatus == 'C') {
//         ZoneStatus = 'Commissioning';
//       }
//     this.openSnackBar(`You can only select zones with status ${ZoneStatus}`);

//     // Force immediate uncheck
//     selectedBlock.isSelected = false;
//     this.cdr.detectChanges();   // 👈 ensures UI updates immediately
//     return;
//   }

//   // Allow selection
//   if (!this.selectedBlock.some(z => z.value === selectedBlock.value)) {
//     this.selectedBlock.push(selectedBlock);
//   }
//   selectedBlock.isSelected = true;

//   console.log('✅ Current selectedBlock after handling:', this.selectedBlock);
// }

handleZoneStatus(status: string, selectedBlock: any, level: string) {
  let firstZoneStatus = localStorage.getItem('firstZoneStatus');
  console.log('🔹 firstZoneStatus from localStorage:', firstZoneStatus);
  let globalSelected = JSON.parse(localStorage.getItem('globalSelectedBlocks') || '[]');
  // CASE 1: First selection
  if (!firstZoneStatus && (status === 'UC' || status === 'C')) {
    localStorage.setItem('firstZoneStatus', status);
    firstZoneStatus = status;
  }

  // CASE 2: Mismatch
  if (status !== firstZoneStatus) {
    let ZoneStatus =
      firstZoneStatus === 'UC'
        ? 'Construction'
        : firstZoneStatus === 'C'
        ? 'Commissioning'
        : firstZoneStatus ?? 'Unknown';

    this.openSnackBar(`You can only select zones with status ${ZoneStatus}`);
    globalSelected = globalSelected.filter(
      (b: any) => !(b.level === level && b.value === selectedBlock.value)
    );
    selectedBlock.isSelected = false;
    localStorage.setItem('globalSelectedBlocks', JSON.stringify(globalSelected));
    this.cdr.detectChanges();
    return;
  }

  // CASE 3: Valid selection
  if (!this.selectedBlock.some(item => item.value === selectedBlock.value)) {
    this.selectedBlock.push(selectedBlock);
  }
  selectedBlock.isSelected = true;
}



  openSnackBar(msg) {
    this._snackBar.open(msg, "Close", {
      duration: 2000,
    });
  }

  // onSubmitSelectedBlock(){

  // }

  setFloorData(selectedBlock, planType, floorName) {
  console.log("setting floor data....");

  const floorStatus = localStorage.getItem('firstZoneStatus');
  this.GetZoneStatus.building_id = this.data.buildingId;
  this.GetZoneStatus.level = planType;
  this.GetZoneStatus.zone = floorName;

  this.ZoneStatusservice.GetIndividualZone(this.GetZoneStatus).subscribe((res: any) => {
    if (res && res.length > 0 && res[0].status === floorStatus) {
      this.dialogRef.close({
        selectedBlock,
        planType,
        floorName,
        floorStatus
      }); // ✅ Pass result back
    } else {
      this.dialogRef.close({
        selectedBlock,
        planType,
        floorName,
      });
    }
  });
}
}
