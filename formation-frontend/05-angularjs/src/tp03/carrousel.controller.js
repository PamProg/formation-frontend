export default function CarrouselCtrl($scope, $interval) {
    $scope.images = [
        { 'name': 'New York', 'url': 'img/nyc.jpg' },
        { 'name': 'Paris', 'url': 'img/paris.jpg' },
        { 'name': 'Rio de Janeiro', 'url': 'img/rio-de-janeiro.jpg' },
        { 'name': 'Rome', 'url': 'img/rome.jpg' },
        { 'name': 'Tokyo', 'url': 'img/tokyo.jpg' }
    ];

    $interval(() => $scope.next(), 2500);

    // TODO ajouter une variable 'currentId' au scope 
    //indiquant l'index de l'image courante
    $scope.currentId = 0;

    // TODO ajouter un fonction next()
    $scope.next = function() {
        $scope.currentId == $scope.images.length-1 ? $scope.currentId = 0 : $scope.currentId++;
    };

    // TODO ajouter un fonction previous()
    $scope.previous = function() {
        $scope.currentId == 0 ? $scope.currentId = $scope.images.length-1 : $scope.currentId--;
    };
}
